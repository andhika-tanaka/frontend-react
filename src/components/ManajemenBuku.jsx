import React, { useState } from 'react'

function ManajemenBuku({bookList, store, update, remove}) {
    const [inputBook, setInputBook] = useState()
    const [form,setForm] = useState()

    function handleJudul(e) {
        setInputBook({ ...inputBook, judul: e.target.value })
    }

    function handlePengarang(e) {
        setInputBook({ ...inputBook, pengarang: e.target.value })
    }

    function handleHarga(e) {
        setInputBook({ ...inputBook, harga: e.target.value })
    }

    function handleStok(e) {
        setInputBook({ ...inputBook, stok: e.target.value })
    }

    function submitAdd(e) {
        e.preventDefault()
        store(inputBook)
        setForm("")
    }

    function submitChange(e) {
        e.preventDefault()
        update(inputBook)
        setForm("")
    }

    function showCreate(){
        setForm("create")
    }

    function showEdit(book) {
        setInputBook(book)

        setForm("edit")
    }

    function deleteBook(book) {
        remove(book)
    }

    return (
        <div className="container">
            <h1 className="text-center">Manajemen Buku</h1>

            <div id="daftarBuku">
                <h2 className="">Daftar Buku</h2>
                <hr />
                <button className="" onClick={showCreate} >Tambah Buku</button>
                <table className="">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Judul</th>
                            <th>Pengarang</th>
                            <th>Harga</th>
                            <th>Stok</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookList.map((book, index) => (
                            <tr key={index}>
                                <td> {index +1} </td>
                                <td> {book.judul} </td>
                                <td> {book.pengarang} </td>
                                <td> {book.harga} </td>
                                <td> {book.stok} </td>
                                <td>
                                    <button className="" onClick={() => showEdit(book)}> Edit </button>
                                    <button className="" onClick={() => deleteBook(book)}> Delete </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {form === "create" && (
                <div id="formTambah">
                    <h5>Tambah Buku</h5>
                    <hr />
                    <form className="" onSubmit={submitAdd}>
                        <div className="">
                            <input type="text" name="judul" className="" placeholder="Judul" onChange={handleJudul} />
                        </div>
                        <div className="">
                            <input type="text" name="pengarang" className="" placeholder="Pengarang" onChange={handlePengarang} />
                        </div>
                        <div className="">
                            <input type="number" name="harga" className="" placeholder="Harga" onChange={handleHarga}/>
                        </div>
                        <div className="">
                            <input type="number" name="stok" className="" placeholder="Stok" onChange={handleStok} />
                        </div>
                        <div className="">
                            <input type="submit" className="" value="Simpan" />
                        </div>
                    </form>
                </div> 
            )}   

            {form === "edit" && (
                <div id="formUbah">
                    <h5>Tambah Buku</h5>
                    <hr />
                    <form className="" onSubmit={submitChange}>
                        <div className="">
                            <input type="text" name="judul" className="" placeholder="Judul" onChange={handleJudul} value={inputBook.judul} />
                        </div>
                        <div className="">
                            <input type="text" name="pengarang" className="" placeholder="Pengarang" onChange={handlePengarang} value={inputBook.pengarang} />
                        </div>
                        <div className="">
                            <input type="number" name="harga" className="" placeholder="Harga" onChange={handleHarga} value={inputBook.harga}/>
                        </div>
                        <div className="">
                            <input type="number" name="stok" className="" placeholder="Stok" onChange={handleStok} value={inputBook.stok}/>
                        </div>
                        <div className="">
                            <input type="submit" className="" value="Simpan" />
                        </div>
                    </form>
                </div> 
            )}         
        </div>
    )
}

export default ManajemenBuku
