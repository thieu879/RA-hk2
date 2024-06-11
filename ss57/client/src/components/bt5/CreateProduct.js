"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
function GetAllProduct() {
    const [products, setProducts] = (0, react_1.useState)([]);
    const [newProduct, setNewProduct] = (0, react_1.useState)({
        name: '',
        img: '',
        price: 0,
        quantity: 0,
        create_at: new Date().toISOString(),
    });
    const localData = () => {
        fetch("http://localhost:3000/products")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error(err));
    };
    (0, react_1.useEffect)(() => {
        localData();
    }, []);
    const getProductById = (id) => {
        fetch(`http://localhost:3000/products/${id}`)
            .then((response) => {
            if (!response.ok) {
                throw new Error('Không tìm thấy bản ghi');
            }
            return response.json();
        })
            .then((product) => {
            console.log(product);
        })
            .catch((error) => {
            console.error(error.message);
        });
    };
    const removeProductById = (id) => {
        fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE'
        })
            .then((response) => {
            if (!response.ok) {
                throw new Error('Xóa không thành công');
            }
            return response.json();
        })
            .then((result) => {
            console.log(result);
            localData();
        })
            .catch((error) => {
            console.error(error.message);
        });
    };
    const createProduct = (product) => {
        fetch("http://localhost:3000/products", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then((response) => {
            if (!response.ok) {
                throw new Error('Thêm mới không thành công');
            }
            return response.json();
        })
            .then((result) => {
            console.log(result);
            localData();
        })
            .catch((error) => {
            console.error(error.message);
        });
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct(Object.assign(Object.assign({}, newProduct), { [name]: name === 'price' || name === 'quantity' ? Number(value) : value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        createProduct(newProduct);
    };
    return (<div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={newProduct.name} onChange={handleInputChange}/>
        <input type="text" name="img" placeholder="Image URL" value={newProduct.img} onChange={handleInputChange}/>
        <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleInputChange}/>
        <input type="number" name="quantity" placeholder="Quantity" value={newProduct.quantity} onChange={handleInputChange}/>
        <button type="submit">Add Product</button>
      </form>
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Create At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (<tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td><img src={product.img} alt={product.name} width="50"/></td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.create_at}</td>
              <td>
                <button onClick={() => removeProductById(product.id)}>Remove</button>
              </td>
            </tr>))}
        </tbody>
      </table>
    </div>);
}
exports.default = GetAllProduct;
