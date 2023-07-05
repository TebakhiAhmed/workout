import "./App.css";
import { useState } from "react";
import Card from "./component/card/Card";
import {
  dataType1,
  dataType2,
  dataType3,
  dataType4,
} from "./component/data/Data";
import Table from "./component/table/Table";

function App() {
  const item = ["Mejerie", "Grönsaker", "Kolonial", "Fryst فريز"];
  const dataSelected = [dataType1, dataType2, dataType3, dataType4];
  const [selectTable, setSelectTable] = useState(dataType1);

  const createTable = () => {
    return <Table propValue={selectTable} />;
  };

  return (
    <div>
      <div className=" w-full grid lg:grid-cols-6 gap-5 m-10 p-4  sm:grid-cols-1 ">
        {item.map((value, index) => {
          return (
            <div
              key={index}
              className="mb-3"
              onClick={() => {
                setSelectTable(dataSelected[index]);
              }}
            >
              <Card propValue={value} />
            </div>
          );
        })}
      </div>
      <button className="" onClick={createTable}>
        Show Table
      </button>
      <Table propValue={selectTable} />
    </div>
  );
}

export default App;
