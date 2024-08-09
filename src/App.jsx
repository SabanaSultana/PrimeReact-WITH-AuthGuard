// import { useState } from 'react'
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

import "primereact/resources/themes/lara-light-cyan/theme.css";
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FilterMatchMode } from "primereact/api";

function App() {
  const data = [
    { id: 1, name: "Alice Johnson", age: 28, city: "New York" },
    { id: 2, name: "Bob Smith", age: 34, city: "Los Angeles" },
    { id: 3, name: "Charlie Brown", age: 22, city: "Chicago" },
    { id: 4, name: "David Wilson", age: 41, city: "Houston" },
    { id: 5, name: "Eve Davis", age: 30, city: "Phoenix" },
    { id: 6, name: "Frank Miller", age: 26, city: "Philadelphia" },
    { id: 7, name: "Grace Lee", age: 37, city: "San Antonio" },
    { id: 8, name: "Hannah White", age: 29, city: "San Diego" },
    { id: 9, name: "Ivy Martinez", age: 32, city: "Dallas" },
    { id: 10, name: "Jack Taylor", age: 45, city: "San Jose" },
  ];

  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  return (
    <PrimeReactProvider value={{ unstyled: true }}>
      <div>
        <InputText
          onInput={(e) => {
            setFilters({
              ...filters,
              global: {
                value: e.target.value,
                matchMode: FilterMatchMode.CONTAINS,
              },
            });
          }}
        />
        <DataTable
          value={data}
          filters={filters}
          sortMode="multiple"
          paginator
          rows={3}
          // rowsPerPageOptions={[1,2,3]}
        >
          <Column field="id" header="ID" sortable />
          <Column field="name" header="Name" />
          <Column field="age" header="Age" />
          <Column field="city" header="City" />
        </DataTable>

        {/* Dynamic column */}
        {/* <DataTable value={data} tableStyle={{ minWidth: "50rem" }}>
          {columns.map((col, i) => (
            <Column key={col.id} field={col.field} header={col.header} />
          ))}
        </DataTable> */}
      </div>
    </PrimeReactProvider>
  );
}

export default App;
