/*
    Pengenalan Validation :
    - Saat kita membuat aplikasi, validasi adalah salah satu hal yang sangat penting untuk kita lakukan
    - Validasi memastikan bahwa data sudah dalam keadaan benar atau sesuai sebelum di proses
    - Validasi dilakukan untuk menjaga agar data kita tetap konsisten dan tidak rusak
    - Validasi biasanya dilakukan di kode aplikasi, dan di constraint table di database

    Diagram Validasi :
    User -> Web App -> Validasi -> Logic Aplikasi -> Database

    Validasi di TypeScript :
    - TypeScript  sayangnya tidak menyediakan library untuk validasi, oleh karena itu kita perlu melakukan validasi secara manual
    - Tapi untungnya, banyak library yang dibuat oleh komunitas programmer TypeScript yang bisa kita gunakan untuk mempermudah kita melakukan validasi
    - Salah satu library yang populer untuk melakukan validasi adalah library Zod
    - https://zod.dev/
    - Di kelas ini, kita akan menggunakan library Zod untuk belajar melakukan validasi
*/
