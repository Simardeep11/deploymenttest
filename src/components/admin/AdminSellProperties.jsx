import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebase";
import { collection, getDocs, onSnapshot, addDoc, deleteDoc, doc, getDoc } from "firebase/firestore";
import "./AdminSellProperties.css";

const AdminSellProperties = () => {
  const [pendingProperties, setPendingProperties] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "pendingProperties"), (snapshot) => {
      const propertyData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPendingProperties(propertyData);
    });

    return () => unsubscribe();
  }, []);

  const handleApprove = async (id) => {
    try {
      const propertyRef = doc(db, "pendingProperties", id);
      const propertyDoc = await getDoc(propertyRef);
      const propertyData = propertyDoc.data();

      // Move to properties collection
      await addDoc(collection(db, "properties"), {
        ...propertyData,
        approved: true
      });

      // Remove from pendingProperties collection
      await deleteDoc(propertyRef);
      console.log("Property approved successfully");

      // Update local state
      setPendingProperties(pendingProperties.filter(property => property.id !== id));
    } catch (error) {
      console.error("Error approving property: ", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "pendingProperties", id));
      console.log("Property deleted successfully");

      // Update local state
      setPendingProperties(pendingProperties.filter(property => property.id !== id));
    } catch (error) {
      console.error("Error deleting property: ", error);
    }
  };

  return (
    <div className="admin-sell-properties-wrapper">
      <h1>Pending Property Listings</h1>
      <div className="admin-sell-properties-list">
        {pendingProperties.map((property) => (
          <div key={property.id} className="admin-sell-property-item">
            <h2>{property.name}</h2>
            <p>Price: {property.price}</p>
            <p>Location: {property.location}</p>
            <img src={property.image} alt={property.name} />
            <div className="admin-additional-images">
              {property.additionalImages && property.additionalImages.map((img, index) => (
                <img key={index} src={img} alt={`Additional ${index + 1}`} />
              ))}
            </div>
            <button onClick={() => handleApprove(property.id)}>Approve</button>
            <button onClick={() => handleDelete(property.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminSellProperties;
