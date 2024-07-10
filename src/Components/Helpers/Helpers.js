import productosJson from "../../productos.json";


function asyncMock(categoryId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (categoryId === undefined) {
                resolve(productosJson);
            }
            else {
                const productosFiltrados = productosJson.filter((item) => {
                    return item.categoria===categoryId
                })
                resolve(productosFiltrados)
            }
        }, 2000)
    })
}

async function getOneProductPerCategory(categories) {
    const allProducts = await asyncMock();
    const productsByCategory = categories.map(category => {
        return allProducts.find(product => product.categoria === category)
    });
    return productsByCategory.filter(product => product !== undefined)
}

function getUniqueCategories() {
    const allcategories = productosJson.map(product => product.categoria)
    return [...new Set(allcategories)];
}

export {asyncMock, getOneProductPerCategory, getUniqueCategories};

