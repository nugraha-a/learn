//comment one line
/* Comment
two
*/
// document.writeln('Hello Mother Fatherd');
//!1. tipe data number (hanya bulat dan desimal semuanya disatukan)
    // document.writeln(100);
    // document.writeln('</br>');
    // document.writeln(100.100);
    //1.1  Number Notation (JS mendukung number notation default ada basis 10. juga mendukung hexa, binary dan octal)
        // document.writeln('</br>');
        // document.writeln(0b1111010);//basis 10
//!2 Tipe data boolean (true, false)
    // document.writeln(true);
    // document.writeln('</br>');
    // document.writeln(false);
//!3 Tipe data string
    // document.writeln('string'); //petik satu bisa
    // document.writeln("string"); //petik dua bisa 
    //3.1  Menambah String
        // document.writeln('string' + ' plus');
    //3.2 Escape Sequence (karakter khusus)
        // eg : \n (ENTER), \t (TAB) , \' ('), \" ("), \\ (\)
        // document.writeln('<textarea cols="100" rows="10">'); //petik satu bisa
        // document.writeln('moo\nthe\tr');
        // document.writeln('\"mooth\\er\"');
        // document.writeln('</textarea>');
//!4 Variable
    //var
    //u can change variable eg var = abcd; var a;
    //2015 let, const 
//!5 Operator Matematika
    //aritmatika (+, - , *, ** (exponensial pangkat), /, %(modulo sisa bagi))
    //5.1 u can use -=, *=, /= (augmented assigment)
        // let result = 3;
        // result += 3;
        // document.writeln(result);
    //5.2 unary operator (+,-,++,--)
        // let result = 3;
        // result++;
        // document.writeln(result);
//!6 Operator Perbandingan
    // > < >= <= == === != !==
    //== sama dengan
    //=== sama dengan dan sama tipe datanya
        // let result = 5 == "5";
        // document.writeln(result);
        // result = 5 === "5";
        // document.writeln(result);
//!7 Operator Logika
    //&& || !
    // const a = 80;
    // const b = 70;

    // const lulusUjian = a > 75;
    // document.writeln(lulusUjian);
    // const lulusAbsensi = b > 75;
    // document.writeln(lulusAbsensi);

    // const lulus = lulusUjian && lulusAbsensi;
    // document.writeln(lulus);
//!8 console
    // console.debug('test'); //tidak menggangu performa
    // console.info('test');
    // console.warn('test');
    // console.error('test');
    // console.table([1,2,3]);
//!9 String template
    // const name = "Ictas";
    // const template = `Name : ${name}`;

    // const firstName = "Ictas";
    // const lastName = "Forietas";
    // const template = `Name : ${firstName} ${lastName}`;
    // console.log(template);

    // const firstName = "Ictas";
    // const value = 88;
    // const template = `Name : ${firstName} \nlulus : ${value > 75}`;
    // console.log(template);

    //Multiline String (hanya bekerja dengan backtik ` kutip tidak bisa)
    // const multiLineString = `
    // First Line
    // Second Line
    // `;

    // console.log(multiLineString);
//!10 Konversi String dan Number / Sebaliknya
    // string + number pasti numbernya dianggap string
    // const value1 = "1";
    // const value2 = 1;
    // const result = value1+value2;
    // console.log(result);

    //parseInt(string), parseFloat(string), Number(string), number.toString(), Nan(Not a Number -> jika konversi tidak valid dan jika di dioperasikan bakal Nan lagi(kesalahan awal karakter di tolerir parseInt, parseFloat kecuali Number))
    //Number jika dioperasikan dengan Nan maka akan kembali nan
    //isNaN() Function check v\booelan
//!11 Tipe Data Array
    //berisikan kumpulan data
    //sifatnya dinamis add /remove change
    //let empty = [];
    //let fillArray = ['1','2'];
    // first from 0, every insert on last and the order was index
    //cara insert
        // const names = [];
        // names.push('fak');
        // names.push('yu','month');
        // console.table(names);
        //array.push, array.length, array[index], array[index] = value, delete array[index]
        //jika didelete panjang array tetap, namun index yang hilang tetap bisa diisi, dan jika ada insertion baru maka indeks terbaru maju ke index terakhir
//!12 Tipe Data Object
    // Associate Array
        // Di bahasa pemrograman lain seperti PHP, kita bisa menggunakan index beruba tipe data lain selain number, misal string
        // Fitur ini biasanya disebut associative array atau hash
        // Di JavaScript associative array tidak didukung. 
        // Jika kita memaksa memasukkan data bukan number di index Array, maka JavaScript akan merubah tipe data Array tersebut menjadi object, dan ini bisa berbahaya, karena beberapa operasi di array mungkin bisa berubah hasilnya
    //Tipe Data Obejct
        // Tipe data object adalah tipe data yang mirip dengan tipe data Array
        // Yang membedakan adalah index pada tipe data object bisa menggunakan string
        // Index di object biasanya disebut attributes atau properties, bukan index
        //const namaObject = {};
        //Menambah atau Mengubah
        // orang["nama"] = "Eko Kurniawan";
        //hapus
        // delete orang["umur"]; //hilang atribut
        // console.log(orang);

        // // object dgn propeties
        // const orang = {
        //     fak: 'yu',
        //     mother: 'father'
        // }

        //nama properies bisa jadi ditambah string jika seperti ini
        // const orang = {
        //     'fak kert': 'yu',
        //     mother: 'father'
        // }
        // console.table(orang);

        //mengakses property object
        // console.info(`Nama : ${orang.mother}`);
        // console.info(`Nama : ${orang.['fak kert' ]}`);
        // console.table(orang);
        //delete orang["mother"];
        // console.table(orang);
//!13 If Expression
    //If
        // const nilai = 80;
        // if (nilai > 80) {
        //     console.log('Good Job');
        // }
    //If Else
        // const nilai = 81;
        // if (nilai > 80) {
        //     console.log('Good Job');
        // }else{
        //     console.log('Try Again');
        // }
    //If Else if
        // const nilai = 91;
        // if (nilai > 90) {
        //     console.log('Good Job');
        // }else if(nilai > 80){
        //     console.log('Excelent');
        // }else{
        //     console.log('Try Again');
        // }
//!14 Popup
    // JavaScript memiliki fitur yang bernama alert, prompt dan confirm
    // Alert digunakan untuk memberi peringatan berupa popup text di browser
    // Prompt digunakan untuk meminta input string dari pengguna browser dalam bentuk popup input text
    // Sedangkan confirm digunakan untuk meminta input boolean dari pengguna browser dalam bentuk popup input pilihan
    //Alert
        // alert('test');
    //Prompt
        // const name = prompt('Siapa Nama Anda?');
        // alert(`Hello ${name}`);
    //Confirm
        // const masuk = confirm('Yakin?');
        // if (masuk) {
        //     const name = prompt('Siapa Nama Anda?');
        //     alert(`Hello ${name}`);
        // } else {
        //     alert('Nothin');
        // }
//!15 Undefined (Tipe Data)
    //data yang di deklarasikan namun tidak difenisikan datanya
    // let test;
    // console.log(test);
    // if (test === undefined) {
    //     console.log('yes undefined');
    // }

    // let test = [1,0];
    // if (test[2] === undefined) {
    //     console.log('yes undefined');
    // }

    // Undefined Array Property
    // let test = [1,0];
    // delete test[0];
    // if (test[0] === undefined) {
    //     console.log('yes undefined');
    // }

    // Undefined Object Property
    // const test = {};
    // if (test.name === undefined) {
    //     console.log(test.name);
    // }
    // console.log(test);
//!16 Null (Tipe Data)
    // null merupakan representasi data kosong
    // null berbeda dengan undefined, null berarti variable sudah ditambahkan value nya, hanya saja value nya null
    // Sedangkan undefined adalah variable belum ditambahkan value apapun
    //let firstname = null;
    // console.log(firstname);
//!17 Switch Expression
    // Kadang kita hanya butuh menggunakan kondisi sederhana di if statement, seperti hanya menggunakan perbandingan ==
    // Switch adalah statement percabangan yang sama dengan if, namun  lebih sederhana cara pembuatannya
    // Kondisi di switch statement hanya untuk perbandingan ==
    // ==
    // let nilai = '';
    // switch(nilai){
    //     case 'A':
    //         console.log('Nilai Anda A');
    //         break;
    //     case 'B':
    //         console.log('Nilai Anda B');
    //         break;
    //     default:
    //         console.log('Anda Memasukai Nilai Yang tidak Valid');
    // }
//!18 Type Of
    // Type
    // Hasil Operator typeof
    // Undefined
    // “undefined”
    // Null
    // “object”
    // Boolean
    // “boolean”
    // Number
    // “number”
    // BitInt
    // “bigint”
    // String
    // “string”
    // Symbol
    // “symbol”
    // Function
    // “function”
    // Lainnya
    // “object”
    // let data = Array();

    // console.log(typeof data);
//!19 In Operator
    const person = {
        firstName: "Eko",
        lastName: "Khanendy"
    }
    const result = "firstName" in person; // true
    document .writeln(` <p>${result}</p>`);


