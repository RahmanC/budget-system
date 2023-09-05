interface Value {
  value: string;
}

export const BUDGET_COLUMN = [
  {
    header: "Name",
    accessor: "name",
  },
  {
    header: "Total Budget Amount",
    accessor: "amount",
    Cell: ({ value }) => {
      return (
        <p>
          {value.toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })}
        </p>
      );
    },
  },
  {
    header: "Total Spent Amount",
    accessor: "spent",
    Cell: ({ value }) => {
      return (
        <p>
          {value.toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })}
        </p>
      );
    },
  },
  {
    header: "Status",
    accessor: "status",
    Cell: ({ value }: Value) => {
      return (
        <p
          className={`text-center text-white font-[600] text-[0.8rem] ${
            value === "done" ? "bg-green-600" : "bg-yellow-600"
          } w-[5vw] p-1 rounded-md shadow-md`}
        >
          {value}
        </p>
      );
    },
  },
];
