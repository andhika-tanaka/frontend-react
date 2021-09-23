import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Beranda from './components/Beranda';
import ManajemenBuku from './components/ManajemenBuku';
import Navbar from './components/Navbar';
import axios from 'axios'


function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    retrievedata()
  }, [])

  function retrievedata() {
    axios
      .get("http://localhost:4000/book")
      .then((response) => {
        setBooks(response.data)
      })
      .catch(function(e) {
        console.log(e)
      })
  }

  function storeData(inputBook) {
    axios
      .post("http://localhost:4000/book/add", inputBook)
      .then((res) => {
        setBooks((prevBooks) => [...prevBooks, inputBook])
        alert("Data berhasil ditambahkan !")
      })
      .catch((e) => {
        console.log(e.response.data)
      })
  }

  function updateData(inputBook) {
    axios
      .put("http://localhost:4000/book/update/" +inputBook._id, inputBook)
      .then((res) => {
        retrievedata();
        alert("Data berhasil diperbarui!")
      })
      .catch((e) => {
        console.log(e.response.data)
      })
  }

  function deleteData(book) {
    axios
      .delete("http://localhost:4000/book/delete/" + book._id)
      .then(() => {
        retrievedata();
        alert("Data berhasil dihapus!")
      })
      .catch((e) => {
        console.log(e.response.data)
      })
    console.log(book)
    
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/" exact>
            <Beranda bookList={books} />
          </Route>

          <Route path="/manajemen-buku">
            <ManajemenBuku bookList={books} 
              store={storeData}
              update={updateData}
              remove={deleteData}
            />
          </Route>
        </Switch>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
