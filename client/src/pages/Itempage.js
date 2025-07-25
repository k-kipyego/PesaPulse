import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import axios from "axios";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Modal, Button, Table, Form, Select, Input, message } from "antd";

const Itempage = () => {
  const [itemsData, setItemsData] = useState([]);
  const [popUpModal, setPopupModal] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const dispatch = useDispatch();

  const getAllItems = async () => {
    try {
      dispatch({
        type: "SHOW_LOADING",
      });
      const { data } = await axios.get("/api/items/get-items");
      setItemsData(data);
      dispatch({
        type: "HIDE_LOADING",
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (record) => {
    try {
      dispatch({
        type: "SHOW_LOADING",
      });
      await axios.post("api/items/delete-item", { itemId: record._id });
      message.success("Item Deleted Successfully");
      getAllItems();
      setPopupModal(false);
      dispatch({
        type: "HIDE_LOADING",
      });
    } catch (error) {
      message.error("Somthing Went Wrong");
      console.log(error);
    }
  };
  useEffect(() => {
    getAllItems();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (image, record) => (
        <img src={image} alt={record.name} height="60" width="60" />
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Action",
      dataIndex: "_id",
      render: (id, record) => (
        <div>
          <DeleteOutlined
            style={{ cursor: "pointer" }}
            onClick={() => handleDelete(record)}
          />
          <EditOutlined
            onClick={() => {
              setEditItem(record);
              setPopupModal(true);
            }}
            style={{ cursor: "pointer" }}
          />
        </div>
      ),
    },
  ];

  const handleSubmit = async (value) => {
    if (editItem === null) {
      try {
        dispatch({
          type: "SHOW_LOADING",
        });
        const res = await axios.post("api/items/add-item", value);
        message.success("Item Added Successfully");
        getAllItems();
        setPopupModal(false);
        dispatch({
          type: "HIDE_LOADING",
        });
      } catch (error) {
        message.error("Somthing Went Wrong");
        console.log(error);
      }
    } else {
      try {
        dispatch({
          type: "SHOW_LOADING",
        });
        const res = await axios.put("api/items/edit-item", {
          ...value,
          itemId: editItem._id,
        });
        message.success("Item Updated Successfully");
        getAllItems();
        setPopupModal(false);
        dispatch({
          type: "HIDE_LOADING",
        });
      } catch (error) {
        message.error("Somthing Went Wrong");
        console.log(error);
      }
    }
  };

  return (
    <DefaultLayout>
      <div className="d-flex justify-content-between">
        <h1>Item List</h1>
        <Button type="primary" onClick={() => setPopupModal(true)}>
          Add Item
        </Button>
      </div>
      <Table columns={columns} dataSource={itemsData} />

      {popUpModal && (
        <Modal
          title={`${editItem !== null ? "Edit Item" : "Add New Item"}`}
          visible={popUpModal}
          onCancel={() => {
            setPopupModal(false);
            setEditItem(null);
          }}
          footer={false}
        >
          <Form
            layout="vertical"
            onFinish={handleSubmit}
            initialValues={editItem}
          >
            <Form.Item name="name" label="Name">
              <Input />
            </Form.Item>
            <Form.Item name="price" label="Price">
              <Input />
            </Form.Item>
            <Form.Item name="image" label="Image URL">
              <Input />
            </Form.Item>
            <Form.Item name="category" label="Category">
              <Select>
                <Select.Option value="drinks">Drinks</Select.Option>
                <Select.Option value="rice">Rice</Select.Option>
                <Select.Option value="noodles">Noodles</Select.Option>
              </Select>
            </Form.Item>

            <div className="d-flex justify-content-end">
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </div>
          </Form>
        </Modal>
      )}
    </DefaultLayout>
  );
};

export default Itempage;
