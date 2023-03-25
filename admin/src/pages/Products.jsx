import React from "react";
import {
  Box,
  Button,
  createStyles,
  Drawer,
  FileInput,
  Flex,
  MultiSelect,
  NumberInput,
  Pagination,
  Select,
  Stack,
  Table,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import WithAsteriskCustoms from "../components/WithAsteriskCustoms";

const Products = () => {
  const { classes } = makeStyles();

  return (
    <Stack>
      <Text className={classes.title}>Products</Text>
      <FilterProduct />
      <ListProducts />
    </Stack>
  );
};

const FilterProduct = () => {
  const { classes } = makeStyles();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Flex className={classes.flexFilter}>
      <Box className={classes.box}>
        <TextInput placeholder="Search..." />
      </Box>
      <Box className={classes.box}>
        <Select
          placeholder="Category"
          data={[
            { value: "react", label: "React" },
            { value: "ng", label: "Angular" },
            { value: "svelte", label: "Svelte" },
            { value: "vue", label: "Vue" },
          ]}
        />
      </Box>
      <Box className={classes.box}>
        <Select
          placeholder="Price"
          data={[
            { value: "react", label: "React" },
            { value: "ng", label: "Angular" },
            { value: "svelte", label: "Svelte" },
            { value: "vue", label: "Vue" },
          ]}
        />
      </Box>
      <Box className={classes.box}>
        <Button className={classes.button} onClick={open}>
          + Add Product
        </Button>
      </Box>

      <DrawerAddProduct opened={opened} open={open} close={close} />
    </Flex>
  );
};

const DrawerAddProduct = ({ opened, open, close }) => {
  const { classes } = makeStyles();

  return (
    <Drawer
      opened={opened}
      onClose={close}
      position="right"
      size={700}
      title={
        <Stack spacing={0}>
          <Text fw="bold">Add Product</Text>
          <Text>Add your product and necessary information from here</Text>
        </Stack>
      }
    >
      {/* Drawer content */}
      <Stack spacing={20}>
        <Flex className={classes.flexDrawer}>
          <Box className={classes.boxF1}>
            <Text className={classes.titleDrawer}>
              Product Image <WithAsteriskCustoms />
            </Text>
          </Box>
          <Box className={classes.boxF1}>
            <FileInput placeholder="Pick file" />
          </Box>
        </Flex>

        <Flex className={classes.flexDrawer}>
          <Box className={classes.boxF1}>
            <Text className={classes.titleDrawer}>
              Product Title/Name <WithAsteriskCustoms />
            </Text>
          </Box>
          <Box className={classes.boxF1}>
            <TextInput placeholder="Product Title/Name" />
          </Box>
        </Flex>

        <Flex className={classes.flexDrawer}>
          <Box className={classes.boxF1}>
            <Text className={classes.titleDrawer}>
              Product Description <WithAsteriskCustoms />
            </Text>
          </Box>
          <Box className={classes.boxF1}>
            <Textarea placeholder="Product Description" />
          </Box>
        </Flex>

        <Flex className={classes.flexDrawer}>
          <Box className={classes.boxF1}>
            <Text className={classes.titleDrawer}>
              Product Quantity <WithAsteriskCustoms />
            </Text>
          </Box>
          <Box className={classes.boxF1}>
            <NumberInput placeholder="Product Quantity" />
          </Box>
        </Flex>

        <Flex className={classes.flexDrawer}>
          <Box className={classes.boxF1}>
            <Text className={classes.titleDrawer}>
              Product Price <WithAsteriskCustoms />
            </Text>
          </Box>
          <Box className={classes.boxF1}>
            <NumberInput placeholder="Product Price" />
          </Box>
        </Flex>

        <Flex className={classes.flexDrawer}>
          <Box className={classes.boxF1}>
            <Text className={classes.titleDrawer}>
              Sale Price <WithAsteriskCustoms />
            </Text>
          </Box>
          <Box className={classes.boxF1}>
            <NumberInput placeholder="Sale Price" />
          </Box>
        </Flex>

        <Flex className={classes.flexDrawer}>
          <Box className={classes.boxF1}>
            <Text className={classes.titleDrawer}>
              Category <WithAsteriskCustoms />
            </Text>
          </Box>
          <Box className={classes.boxF1}>
            <MultiSelect
              placeholder="choice"
              data={[
                { value: "react", label: "React" },
                { value: "ng", label: "Angular" },
                { value: "svelte", label: "Svelte" },
                { value: "vue", label: "Vue" },
                { value: "riot", label: "Riot" },
                { value: "next", label: "Next.js" },
                { value: "blitz", label: "Blitz.js" },
              ]}
            />
          </Box>
        </Flex>

        <Flex className={classes.flexDrawer}>
          <Box className={classes.boxF1}>
            <Text className={classes.titleDrawer}>
              Component <WithAsteriskCustoms />
            </Text>
          </Box>
          <Box className={classes.boxF1}>
            <MultiSelect
              placeholder="choice"
              data={[
                { value: "react", label: "React" },
                { value: "ng", label: "Angular" },
                { value: "svelte", label: "Svelte" },
                { value: "vue", label: "Vue" },
                { value: "riot", label: "Riot" },
                { value: "next", label: "Next.js" },
                { value: "blitz", label: "Blitz.js" },
              ]}
            />
          </Box>
        </Flex>

        <Flex gap={10} className={classes.flexBtnDrawer}>
          <Button className={classes.boxF1}>Cancel</Button>
          <Button className={classes.boxF1}>Add Product</Button>
        </Flex>
      </Stack>
    </Drawer>
  );
};

const ListProducts = () => {
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
  box: {
    flex: 1,
  },

  flexFilter: {
    alignItems: "center",
    justifyContent: "spact-between",
    gap: 10,
    border: "1px solid #e5e7eb",
    padding: 40,
    borderRadius: 15,
  },

  button: {
    width: "100%",
  },

  flexDrawer: {
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  boxF1: {
    flex: 1,
  },
  titleDrawer: {
    fontSize: 14,
  },

  flexBtnDrawer: {
    marginTop: 20,
  },
}));
export default Products;
