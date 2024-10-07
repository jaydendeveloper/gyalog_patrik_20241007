const str = "ezegyeLégHOsszústring"

const elso_ot = str.slice(0, 5);

console.log("Az első 5 karakter:", elso_ot);

const harom_nyolc = str.slice(2, 8);

console.log("A 3-8 karakter:", harom_nyolc);

const ot_vegeig = str.slice(4);

console.log("A 5.tol a vegeig:", ot_vegeig);

const ottol_hatkarakter = str.substr(4, 6);

console.log("A 5.tol 6 karakter:", ottol_hatkarakter);

const nagybetus = str.toUpperCase();

console.log("Nagybetűvel:", nagybetus);

let minden_masodik_nagybetu = "".concat(
    str.split("").map(
        (char, index)=> {
            let str = "";
            if(index %2 == 0){
                str += char.toUpperCase();
            } else {
                str += char.toLowerCase();
            }
            return str;
        }
    )
).replaceAll(",","")

console.log("Minden 2. nagybetu", minden_masodik_nagybetu)

const minden_e_nagybetu = str.replaceAll("e", "E");

console.log("Minden e nagybetu", minden_e_nagybetu)

const e_betunel_elvalasztva = str.split("e");

console.log("e betunel elvalasztva:", e_betunel_elvalasztva);