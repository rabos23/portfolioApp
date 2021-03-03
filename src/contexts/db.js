import React, {usestate, useEffect, fragment, useContext} from "react";
import firebase from "../firebase"
import { useAuth } from "./AuthContext";


function database(){
    const {currentUser} = useContext(useAuth);
    const currentUserId = currentUser;
    const [Items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
 

    const ref = firebase.firestore().collection("cryptos")

    function getItems() {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items =[];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
                });
                setItems(items);
                setLoading(false);
        } );
    }
useEffect(() => {
    getItems();
},[]);

function AddCrypto(){
    const owner = currentUser;
    const newCrypto = {
        Par1, Par2
    }
}
}

