"use client";
import { useEffect } from "react";

 function BoostrapClient() {
 	useEffect(() => {
 	  import("bootstrap/dist/js/bootstrap");
 	}, []);

 	return null;
 }

 export default BoostrapClient;