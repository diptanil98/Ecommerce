import { useEffect, useState } from "react";
import axios from "axios";
import type{Product} from "../types";

export function useDisplayProduct() {
    const [products,setProducts] = useState<Product[]>([]);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        axios.get("https://ecommerce-backend-wv48.onrender.com/products")
        .then((res)=>{
            setProducts(res.data);
            setLoading(false);
        })
        .catch(()=>{
            setLoading(false);
        })
    },[])

    return {products,loading};
}

