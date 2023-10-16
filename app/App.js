// import React, { useState, useEffect } from "react";
// import { Text, View, StyleSheet, Button } from "react-native";
// import { BarCodeScanner } from "expo-barcode-scanner";

// export default function App() {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [scanned, setScanned] = useState(false);
//   const [text, setText] = useState("");
//   const [roll, setroll] = useState("");
//   const [status, setstatus] = useState("");

//   const askForCameraPermission = () => {
//     (async () => {
//       const { status } = await BarCodeScanner.requestPermissionsAsync();
//       setHasPermission(status === "granted");
//     })();
//   };

//   const mark_entry = async () => {
//     try {
     
//       let res = await fetch("https://pass-server-o7gu.onrender.com/verify", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           t_id: text,
//         }),
//       });

//       if (!res.ok) {
//         throw new Error(`Request failed with status: ${res.status}`);
//       }

//       let data = await res.json();
//       setScanned(false);
//       setroll(data.rno);
//       console.log(data);
//       if (data.Success) {
//         setstatus("Valid QR!");

//         console.log(status);
//       } else {
//         setstatus(data.errors);
//         console.log(data.Success);

//         console.log(data.errors);
//       }
      

//       return data;
//     } catch (error) {
//       console.error("Error during fetch:", error);
//     }
//   };

//   // Request Camera Permission
//   useEffect(() => {
//     askForCameraPermission();
//   }, []);

//   // What happens when we scan the bar code
//   const handleBarCodeScanned = ({ type, data }) => {
//     setScanned(true);
//     setText(data);
    

//     console.log("Type: " + type + "\nData: " + data);
//   };

//   // Check permissions and return the screens
//   if (hasPermission === null) {
//     return (
//       <View style={styles.container}>
//         <Text>Requesting for camera permission</Text>
//       </View>
//     );
//   }
//   if (hasPermission === false) {
//     return (
//       <View style={styles.container}>
//         <Text style={{ margin: 10 }}>No access to camera</Text>
//         <Button
//           title={"Allow Camera"}
//           onPress={() => askForCameraPermission()}
//         />
//       </View>
//     );
//   }

//   // Return the View
//   return (
//     <View style={styles.container}>
//       <View style={styles.barcodebox}>
//         <BarCodeScanner
//           onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
//           style={{ height: 400, width: 400 }}
//         />
//       </View>
//       <Text style={styles.maintext}>{text}</Text>

//       {scanned && (
//         <Button title={"Scan again?"} onPress={()=>{
        
//           mark_entry()

//         }} 
//           color="tomato" />
//       )}
//       <Text style={styles.maintext}>{status}</Text>
//       <Text style={styles.maintext}>{roll}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   maintext: {
//     fontSize: 16,
//     margin: 20,
//   },
//   barcodebox: {
//     alignItems: "center",
//     justifyContent: "center",
//     height: 300,
//     width: 300,
//     overflow: "hidden",
//     borderRadius: 30,
//     backgroundColor: "tomato",
//   },
// });
