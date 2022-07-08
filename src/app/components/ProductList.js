// ProductList.js
import axios from 'axios';
import React, { Component, useState, useEffect } from 'react';
// npm install axios 
const API = 'http://localhost:7070/delayed/api/products'

// useEffect is useful in accessing DOM elements
// useEffect useful for componentDidMount like implementation lifecycle
// useEffect useful for componentDidUpdate like implementation lifecycle
// useEffect useful for componentwillUnmount like implementation lifecycle

//TODO: cancel axios pending calls if user visit another page/like componentwillUnmount

const  ProductList = (props)  => {
        console.log("ProductList render ")
        const [loading, setLoading] = useState(false)
        const [products, setProducts] = useState([])
        const [count, setCount] = useState(0) // useEffect understanding purpose

        //similar to componentDidMount and componentDidUpdate
        // called on creation and update cycle
        // called after function comp render
        // useEffect can return a callback function that shall be called by react 
        //                      on cleanup purpose similar to  componentwillUnmount
        useEffect( () => {
            console.log("useEffect 1 called")

            // returned callback called by react during unmount
            return () => {
                //this function called during component unmount/before destroy
                console.log("useEffect 1 componentwillUnmount like")
            }
        })

        // 2nd argument to useEffect is list of dependent variabels
        // to call useEffect hoook on value changes
        // using [] empty array means, useEffect called only creation cycle, not on update cycle
        // //similar to   componentDidMount
        useEffect(() => {
            console.log("useEffect 2 called");

            const CancelToken = axios.CancelToken;
            const source = CancelToken.source();

            (async()=>{
                setLoading(true)

                try { 
                  let data = await axios(API,  {
                    cancelToken: source.token
                  });
                    setProducts(data.data) //data.data contains all products
                    setLoading(false)
                }catch(err)  {
                    // called when we cancel the pending xhr/ajax calls
                    if (axios.isCancel(err)) {
                        console.log('Request canceled', err.message);
                      } else {
                        // handle error
                        console.log("Error ")
                      } 
                }

                })();
           

            // return destroy/callback function
            return () => {
                console.log("useEffect 2 componentwillUnmount like")
                                
                // cancel the request (the message parameter is optional)
                source.cancel('Operation canceled by the user.');
            }
        }, []) // [] is no depedent variables, useful for componentDidMount like

        // <> - React.Fragment empty tag, use when no parent tag needed
        if (loading) {
            return (
                <>
                <h2>Product List</h2>
                <p>Data is loading.......</p>
                </>
            )
        }

        return ( 
            <div>
                <h2>Product List</h2>
                 <button onClick={() => setCount (count + 1)}>+1</button>
                <table>
                    <thead>
                    <tr>
                    <th>Name</th>
                    <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                             products.map (product => (
                                <tr key={product.id}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
         );
    }
 
 
export default ProductList;