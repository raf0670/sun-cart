export const getPosts = async () => {
    const res = await fetch("https://sun-cart-server-f0w2.onrender.com/products");
    return res.json();
};

export const getProduct = async (id) => {
    const res = await fetch(`https://sun-cart-server-f0w2.onrender.com/products/${id}`);
    return res.json();
};