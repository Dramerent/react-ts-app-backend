import { prisma } from "../lib/prismaClient.js";
import { validationResult } from "express-validator";
export async function getAllInfo(req, res) {
    try {
        console.log(process.env.DATABASE_URL);
        const allInfo = await prisma.guitars.findMany({
            include: {
                strings: true,
                shop: true
            }
        });
        res.send(allInfo);
        return res.json(allInfo);
    }
    catch (error) {
        return res.status(500).json({ error });
    }
}
export async function postCardInfo(req, res) {
    try {
        const { guitar_name, shop_id, string_id } = req.body;
        const error = validationResult(req);
        if (!error.isEmpty()) {
            console.log(error.array()[0].msg);
            return res.status(500).json(error.array()[0].msg);
        }
        const create = await prisma.guitars.create({
            data: {
                guitar_name: guitar_name,
                shop_id: shop_id,
                strings_id: string_id
            },
        });
        return res.json(create);
    }
    catch (error) {
        return res.status(500).json("непривдиденная ошибка");
    }
}
export async function postShopInfo(req, res) {
    try {
        const { shop_name, shop_adress } = req.body;
        const error = validationResult(req);
        if (!error.isEmpty()) {
            console.log(error.array()[0].msg);
            return res.status(500).json(error.array()[0].msg);
        }
        const create = await prisma.shop.create({
            data: {
                shop_name: shop_name,
                shop_adress: shop_adress
            },
        });
        return res.json(create);
    }
    catch (error) {
        return res.status(500).json(error);
    }
}
export async function postStringInfo(req, res) {
    try {
        const { string_name, string_company, num_of_strings } = req.body;
        const error = validationResult(req);
        if (!error.isEmpty()) {
            console.log(error.array()[0].msg);
            return res.status(500).json(error.array()[0].msg);
        }
        const create = await prisma.strings.create({
            data: {
                string_name: string_name,
                string_company: string_company,
                num_of_strings: num_of_strings
            },
        });
        console.log(create);
        return res.json(create);
    }
    catch (error) {
        return res.status(500).json(error);
    }
}
export async function getAllShops(req, res) {
    const allShops = await prisma.shop.findMany({});
    res.json(allShops);
}
export async function getAllStrings(req, res) {
    const alLStrings = await prisma.strings.findMany({});
    res.json(alLStrings);
}
