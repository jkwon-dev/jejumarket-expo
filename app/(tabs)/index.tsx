import { getProducts } from "@/FirebaseConfig";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, View, Text, FlatList } from "react-native";

// interface ProductData {
//   data: Array<ProductType>;
// }

export type ProductType = {
  category: string;
  description: string;
  id: string;
  image: string;
  options: string[];
  price: number;
  title: string;
};

export default function HomeScreen() {
  const [products, setProducts] = useState<ProductType[]>([]);

  async function getData() {
    const data = (await getProducts()) as ProductType[];
    setProducts(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Header text={"Jeju Market"} />
        <FlatList
          columnWrapperStyle={{
            flex: 1,
            justifyContent: "space-between",
            marginVertical: 32,
            gap: 8,
          }}
          data={products}
          renderItem={({ item }) => <ProductCard item={item} />}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
