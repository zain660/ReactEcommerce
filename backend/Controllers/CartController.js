import Cart from "../Model/CartModel.js";
import Product from "../Model/ProductModel.js";
import dd from "dump-die";
import Pusher from "pusher";
export const AddToCart = async (req, res) => {
    // dd(req.body);
    try {

        await Cart.create({
            user_id: req.body.user_id,
            productId: req.body.productId,
            quantity: 1,
        });
        // dd(req);

        // const pusher = new Pusher({
        //     appId: "1470264",
        //     key: "e8e16676c70ff0e2025d",
        //     secret: "3343f46ee76f8bc36433",
        //     cluster: "ap2",
        //     useTLS: true
        //   });

        //   pusher.trigger("my-channel", "my-event", {
        //     message: "hello world"
        //   });


        res.json({
            "message": "Product successfuly added in to cart."
        });
    } catch (error) {
        res.json({ message: error.message });
    }

}

export const GetCartData = async (req, res) => {
    try {
        const junction = await Cart.findAll({
            attributes: ['productId'],
            include: [{
                model: Product,
                attributes: ['name', 'image', 'price'],
            }],
        });
        //   dd(junction); 


        res.json(junction);
    } catch (error) {
        res.json({ message: error.message });
    }

}


export const updateCart = async (req, res) => {

    try {
        await Cart.update(req.body, {

            where: {
                id: req.params.id
            },
            quantity: req.body.quantity,
        });

        res.json({
            "message": "Cart Updated"
        });
    } catch (error) {

    }
}