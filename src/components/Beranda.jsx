import React from 'react'

function Beranda({bookList}) {
    return (
        <div className="container">
            <h1 className="text-center">Selamat Datang di toko buku Camp404</h1>

            <div id="katalogBuku">
                <h2 className="">Katalog Buku</h2>
                <hr />
                <table className="">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Judul</th>
                            <th>Pengarang</th>
                            <th>Harga</th>
                            <th>Stok</th>
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Beranda
