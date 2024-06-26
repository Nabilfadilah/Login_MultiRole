import Products from "../models/ProductModel.js";
import User from "../models/UserModel.js";
import { Op } from "sequelize";

// get 
export const getProduct = async (req, res) =>{
    try {
        let response;
        if(req.role === "admin"){
            response = await Products.findAll({
                attributes: ['uuid','name','price'],
                include:[{
                    model: User,
                attributes: ['uuid','email', 'name']
                }]
            })
        } else {
            response = await Products.findAll({
                attributes: ['uuid','name','price'],
                where: {
                    userId: req.userId
                },
                include:[{
                    model: User,
                    attributes: ['uuid','email', 'name']
                }]
            })
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

// get alll
export const getProductById = async (req, res) =>{
    try {
        const product = await Products.findOne({
            where: {
                uuid: req.params.id
            }
        })
        if(!product) return res.status(400).json({msg: "Data tidak ditemukan!"});

        let response;
        if(req.role === "admin"){
            response = await Products.findOne({
                attributes: ['uuid','name','price'],
                where: {
                    id: product.id
                },
                include:[{
                    model: User,
                attributes: ['uuid','email']
                }]
            })
        } else {
            response = await Products.findOne({
                attributes: ['uuid','name','price'],
                where: {
                    [Op.and]:[{id: product.id}, {userId: req.userId}]
                },
                include:[{
                    model: User,
                    attributes: ['uuid','email']
                }]
            })
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

// tambah
export const createProduct = async (req, res) =>{
    const {name, price} = req.body;
    try {
        await Products.create({
            name: name,
            price: price,
            userId: req.userId
        });
        res.status(201).json({msg: "Product Created Succesfully"})
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

// edit
export const updateProduct = async (req, res) =>{
    try {
        const product = await Products.findOne({
            where: {
                uuid: req.params.id
            }
        })
        if(!product) return res.status(400).json({msg: "Data tidak ditemukan!"});

        const {name, price} = req.body;
        if(req.role === "admin"){
            await Products.update({name, price}, {
                where: {
                    id: product.id
                }
            })
        } else {
            if(req.userId !== product.userId) return res.status(403).json({msg: 'Akses terlarang!'});
            await Products.update({name, price}, {
                where: {
                    [Op.and]:[{id: product.id}, {userId: req.userId}]
                }
            })
        }
        res.status(200).json({msg: "Product updated succesfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

// delete 
export const deleteProduct = async (req, res) =>{
    try {
        const product = await Products.findOne({
            where: {
                uuid: req.params.id
            }
        })
        if(!product) return res.status(400).json({msg: "Data tidak ditemukan!"});

        const {name, price} = req.body;
        if(req.role === "admin"){
            await Products.destroy({
                where: {
                    id: product.id
                }
            })
        } else {
            if(req.userId !== product.userId) return res.status(403).json({msg: 'Akses terlarang!'});
            await Products.destroy({
                where: {
                    [Op.and]:[{id: product.id}, {userId: req.userId}]
                }
            })
        }
        res.status(200).json({msg: "Product deleted succesfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}