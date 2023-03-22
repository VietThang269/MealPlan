import {
  createStyles,
  Flex,
  Pagination,
  Stack,
  Table,
  Text,
  TextInput,
} from "@mantine/core";
import React from "react";

const Customers = () => {
  const { classes } = makeStyles();

  return (
    <Stack>
      <Text className={classes.title}>Customers</Text>
      <SearchCustomer />
      <ListCustomers />
    </Stack>
  );
};

const SearchCustomer = () => {
  const { classes } = makeStyles();

  return (
    <Flex className={classes.flex}>
      <TextInput placeholder="Search..." className={classes.input} />
    </Flex>
  );
};

const ListCustomers = () => {
  const elements = [
    { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
  ];
  const ths = (
    <tr>
      <th>Element position</th>
      <th>Element name</th>
      <th>Symbol</th>
      <th>Atomic mass</th>
    </tr>
  );

  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));

  return (
    <Stack>
      <Table captionSide="bottom" withBorder>
        <thead>{ths}</thead>
        <tbody>{rows}</tbody>
      </Table>

      <Pagination total={10} />
    </Stack>
  );
};

const makeStyles = createStyles(() => ({
  title: {
    fontSize: 18,
    fontWeight: 700,
  },

  flex: {
    border: "1px solid #e5e7eb",
    padding: 40,
    borderRadius: 15,
  },

  input: {
    width: "100%",
  },
}));

export default Customers;
