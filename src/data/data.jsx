export const getPosts = async () => {
    const res = await fetch("http://localhost:5000/products");
    return res.json();
};

export const getProduct = async (id) => {
    const res = await fetch(`http://localhost:5000/products/${id}`);
    return res.json();
};