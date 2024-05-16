import query from "../config/connection";

async function findOne(id) {
  return await query("SELECT * FROM towns WHERE ID = ?", [id]);
}

async function findAll() {
  return await query("SELECT * FROM towns");
}

async function addOne(newData) {
  return await query("INSERT INTO towns SET ?", [newData]);
}

async function updateOne(id, data) {
  return await query("UPDATE towns SET ? WHERE ID = ?", [data, id]);
}

async function removeOne(id) {
  return await query("DELETE FROM towns WHERE ID = ?", [id]);
}
export { 
    findOne, 
    findAll, 
    addOne, 
    updateOne, 
    removeOne 
};
