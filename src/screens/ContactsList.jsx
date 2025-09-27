import React from "react";
import ContactListTable from "../../components/Tables/ContactListTable";
import { useState } from "react";
import { showAxiosError } from "../../core/toast";
import { API } from "../../core/url";
import { useEffect } from "react";

export default function ContactsList() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const resp = await API.get("/admin/contacts");
      setData(resp.data);
    } catch (error) {
      showAxiosError(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="space-y-5">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Contacts</h1>
        <p className="text-gray-600">List of people contacted from website</p>
      </div>

      <ContactListTable data={data} />
    </div>
  );
}
