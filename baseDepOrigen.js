
const departamentoOrigen = document.getElementById('departamentoSelectOrigen');
departamentoOrigen.addEventListener("change",mostrarMunicipiosOrigen);

function mostrarMunicipiosOrigen() {
    validarOrigen()
    switch (departamentoOrigen.value) {
        case "16": //ALTA VERAPAZ
            municipioOrigen.removeAttribute("disabled");
            municipioOrigen.innerHTML = `
            <option value="0">Seleccione Municipio</option>
            <option value="1612">Santa Maria Cahabon</option>
            <option value="0101">Telemán</option>
            <option value="1610">San Juan Chamelco</option>
            <option value="1609">San Pedro Carcha</option>
            <option value="1603">San Cristobal Verapaz</option>
            <option value="1602">Santa Cruz Verapaz</option>
            <option value="1604">Tactic</option>
            <option value="1601">Coban</option>
            <option value="1615">Fray Bartolome De Las Casas</option>
            <option value="1611">Lanquin</option>
            <option value="1613">Chisec</option>
            <option value="1614">Chahal</option>
            <option value="1616">Santa Catalina La Tinta</option>
            <option value="1607">Panzos</option>
            <option value="1608">Senahu</option>
            <option value="1605">Tamahu</option>
            <option value="1606">Tucuru</option>
            <option value="1617">Raxruha</option>`;
            break;
        case "15"://BAJA VERAPAZ
            municipioOrigen.removeAttribute("disabled");
            municipioOrigen.innerHTML = `
            <option value="0">Seleccione Municipio</option>
            <option value="1506">Santa Cruz El Chol</option>
            <option value="1505">Granados</option>
            <option value="1508">Purulha</option>
            <option value="1507">San Jeronimo</option>
            <option value="1504">Cubulco</option>
            <option value="1503">Rabinal</option>
            <option value="1501">Salama</option>
            <option value="1502">San Miguel Chicaj</option>
            `;
            break;
        case "04"://CHIMALTENANGO
            municipioOrigen.removeAttribute("disabled");
            municipioOrigen.innerHTML = `
            <option value="0">Seleccione Municipio</option>
            <option value="0411">Acatenango</option>
            <option value="0409">Patzicia</option>
            <option value="0407">Patzun</option>
            <option value="0404">San Juan Comalapa</option>
            <option value="0410">Santa Cruz Balanya</option>
            <option value="0415">Zaragoza</option>
            <option value="0412">San Pedro Yepocapa</option>
            <option value="0402">San Jose Poaquil</option>
            <option value="0405">Santa Apolonia</option>
            <option value="0406">Tecpan Guatemala</option>
            <option value="0401">Chimaltenango</option>
            <option value="0416">El Tejar</option>
            <option value="0413">San Andres Itzapa</option>
            <option value="0414">Parramos</option>
            <option value="0403">San Martin Jilotepeque</option>
            <option value="0408">Pochuta</option>
            `;
            break;
        case "20"://CHIQUIMULA
            municipioOrigen.removeAttribute("disabled");
            municipioOrigen.innerHTML = `
            <option value="0">Seleccione Municipio</option>
            <option value="2005">Camotan</option>
            <option value="2001">Chiquimula</option>
            <option value="2004">Jocotan</option>
            <option value="2003">San Juan Ermita</option>
            <option value="2010">San Jacinto</option>
            <option value="2002">San Jose la Arada</option>
            <option value="2011">Ipala</option>
            <option value="2007">Esquipulas</option>
            <option value="2008">Concepcion las minas</option>
            <option value="2006">Olopa</option>
            <option value="2009">Quetzaltepeque</option>
            `;
            break;
        case "02"://EL PROGRESO
            municipioOrigen.removeAttribute("disabled");
            municipioOrigen.innerHTML = `
            <option value="0">Seleccione Municipio</option>
            <option value="0205">El Jicaro</option>
            <option value="0207">Sanarate</option>
            <option value="0201">Guastatoya</option>
            <option value="0208">San Antonio La Paz</option>
            <option value="0206">Sansare</option>
            <option value="0202">Morazan</option>
            <option value="0204">San Cristobal Acasaguastlan</option>
            <option value="0203">San Agustin Acasaguastlan</option>
            `;
            break;
        case "05"://ESCUINTLA
            municipioOrigen.removeAttribute("disabled");
            municipioOrigen.innerHTML = `
            <option value="0">Seleccione Municipio</option>
            <option value="0513">Nueva Concepcion</option>
            <option value="0506">Tiquisate</option>
            <option value="0501">Escuintla</option>
            <option value="0503">La Democracia</option>
            <option value="0505">Masagua</option>
            <option value="0508">Guanagazapa</option>
            <option value="0502">Santa Lucia Cotzumalguapa</option>
            <option value="0507">La Gomera</option>
            <option value="0504">Siquinala</option>
            <option value="0509">Puerto San Jose</option>
            <option value="0510">Iztapa</option>
            <option value="0511">Palin</option>
            <option value="0512">San Vicente Pacaya</option>
            `;
            break;
        case "01"://GUATEMALA
            municipioOrigen.removeAttribute("disabled");
            municipioOrigen.innerHTML = `
            <option value="0">Seleccione Municipio</option>
            <option value="0101">Guatemala</option>
            <option value="0114">Amatitlan</option>
            <option value="0104">San Jose Del Golfo</option>
            <option value="0105">Palencia</option>
            <option value="0107">San Pedro Ayampuc</option>
            <option value="0113">Fraijanes</option>
            <option value="0103">San Jose Pinula</option>
            <option value="0102">Santa Catarina Pinula</option>
            <option value="0116">Villa Canales</option>
            <option value="0112">Chuarrancho</option>
            <option value="0111">San Raymundo</option>
            <option value="0108">Mixco</option>
            <option value="0110">San Juan Sacatepequez</option>
            <option value="0115">Villa Nueva</option>
            <option value="0117">San Miguel Petapa</option>
            <option value="0106">Chinautla</option>
            <option value="0109">San Pedro Sacatepequez</option>
            `;
            break;
        case "13"://HUEHUETENANGO
            municipioOrigen.removeAttribute("disabled");
            municipioOrigen.innerHTML = `
            <option value="0">Seleccione Municipio</option>
            <option value="1326">Santa Cruz Barillas</option>
            <option value="1314">San Rafael La Independencia</option>
            <option value="1322">Concepcion Huista</option>
            <option value="1323">San Juan Ixcoy</option>
            <option value="1318">San Mateo Ixtatan</option>
            <option value="1313">San Miguel Acatan</option>
            <option value="1320">San Sebastian Huehuetenango</option>
            <option value="1317">Santa Eulalia</option>
            <option value="1308">San Pedro Soloma</option>
            <option value="1315">Todos Santos Cuchumatanes</option>
            <option value="1302">Chiantla</option>
            <option value="1319">Colotenango</option>
            <option value="1329">San Gaspar Ixchil</option>
            <option value="1316">San Juan Atitan</option>
            <option value="1328">San Rafael Petzal</option>
            <option value="1305">Nenton</option>
            <option value="1307">Jacaltenango</option>
            <option value="1324">San Antonio Huista</option>
            <option value="1331">Santa Ana Huista</option>
            <option value="1306">San Pedro Necta</option>
            <option value="1330">Santiago Chimaltenango</option>
            <option value="1304">Cuilco</option>
            <option value="1327">Aguacatan</option>
            <option value="1301">Huehuetenango</option>
            <option value="1303">Malacatancito</option>
            <option value="1321">Tectitan</option>
            <option value="1309">San Ildefonso Ixtahuacan</option>
            <option value="1332">Union Cantinil</option>
            <option value="1310">Santa Barbara Huehuetenango</option>
            <option value="1325">San Sebastian Coatan</option>
            <option value="1311">La Libertad Huehuetenango</option>
            <option value="1312">La Democracia Huehuetenango</option>
            <option value="1333">Petatán</option>
            `;
            break;
        case "18"://IZABAL
            municipioOrigen.removeAttribute("disabled");
            municipioOrigen.innerHTML = `
            <option value="0">Seleccione Municipio</option>
            <option value="1801">Puerto Barrios</option>
            <option value="1802">Livingston</option>
            <option value="1805">Los Amates</option>
            <option value="1804">Morales</option>
            <option value="1803">El Estor</option>
            `;
            break;
        case "21"://JALAPA
            municipioOrigen.removeAttribute("disabled");
            municipioOrigen.innerHTML = `
            <option value="0">Seleccione Municipio</option>
            <option value="2103">San Luis Jilotepeque</option>
            <option value="2106">Monjas</option>
            <option value="2104">San Manuel Chaparron</option>
            <option value="2102">San Pedro Pinula</option>
            <option value="2105">San Carlos Alzatate</option>
            <option value="2101">Jalapa</option>
            <option value="2107">Mataquescuintla</option>
            `;
            break;
        case "22"://JUTIAPA
            municipioOrigen.removeAttribute("disabled");
            municipioOrigen.innerHTML = `
            <option value="0">Seleccione Municipio</option>
            <option value="2202">El Progreso</option>
            <option value="2214">Moyuta</option>
            <option value="2215">Pasaco</option>
            <option value="2204">Agua Blanca</option>
            <option value="2203">Santa Catarina Mita</option>
            <option value="2207">Atescatempa</option>
            <option value="2205">Asuncion Mita</option>
            <option value="2201">Jutiapa</option>
            <option value="2209">El Adelanto</option>
            <option value="2208">Jerez</option>
            <option value="2206">Yupiltepeque</option>
            <option value="2210">Zapotitlan</option>
            <option value="2217">Quesada</option>
            <option value="2213">Conguaco</option>
            <option value="2212">Jalpatagua</option>
            <option value="2216">San Jose Acatempa</option>
            <option value="2211">Comapa</option>
            `;
            break;
        case "17"://PETEN
            municipioOrigen.removeAttribute("disabled");
            municipioOrigen.innerHTML = `
            <option value="0">Seleccione Municipio</option>
            <option value="1713">Las Cruces</option>
            <option value="1711">Melchor de Mencos</option>
            <option value="1707">Santa Ana</option>
            <option value="1705">La Libertad</option>
            <option value="1710">Sayaxche</option>
            <option value="1706">San Francisco</option>
            <option value="1704">San Andres</option>
            <option value="1702">San Jose</option>
            <option value="1703">San Benito</option>
            <option value="1708">Dolores</option>
            <option value="1712">Poptun</option>
            <option value="1709">San Luis</option>
            <option value="1714">El Chal</option>
            <option value="1701">Flores</option>
            `;
            break;
        case "09"://QUETZALTENANGO
            municipioOrigen.removeAttribute("disabled");
            municipioOrigen.innerHTML = `
            <option value="0">Seleccione Municipio</option>
            <option value="0919">El Palmar</option>
            <option value="0922">Flores Costa Cuca</option>
            <option value="0921">Genova</option>
            <option value="0920">Coatepeque</option>
            <option value="0917">Colomba</option>
            <option value="0901">Quetzaltenango</option>
            <option value="0915">Huitan</option>
            <option value="0911">Concepcion Chiquirichapa</option>
            <option value="0903">Olintepeque</option>
            <option value="0902">Salcaja</option>
            <option value="0912">San Martin Sacatepequez</option>
            <option value="0923">La Esperanza</option>
            <option value="0909">San Juan Ostuncalco</option>
            <option value="0910">San Mateo</option>
            <option value="0904">San Carlos Sija</option>
            <option value="0918">San Francisco La Union</option>
            <option value="0908">San Miguel Siguila</option>
            <option value="0905">Sibilia</option>
            <option value="0913">Almolonga</option>
            <option value="0914">Cantel</option>
            <option value="0916">Zunil</option>
            <option value="0924">Palestina de los Altos</option>
            <option value="0906">Cabrican</option>
            <option value="0907">Cajola</option>
            `;
            break;
        case "14"://QUICHE
            municipioOrigen.removeAttribute("disabled");
            municipioOrigen.innerHTML = `
            <option value="0">Seleccione Municipio</option>
            <option value="1413">Nebaj</option>
            <option value="1420">Ixcan</option>
            <option value="1416">Sacapulas</option>
            <option value="1409">San Pedro Jocopilas</option>
            <option value="1411">San Juan Cotzal</option>
            <option value="1405">Chajul</option>
            <option value="1410">Cunen</option>
            <option value="1418">Canilla</option>
            <option value="1414">San Andres Sajcabaja</option>
            <option value="1407">Patzite</option>
            <option value="1408">San Antonio Ilotenango</option>
            <option value="1417">San Bartolome Jocotenango</option>
            <option value="1412">Joyabaj</option>
            <option value="1404">Zacualpa</option>
            <option value="1403">Chinique</option>
            <option value="1401">Santa Cruz del Quiche</option>
            <option value="1402">Chiche</option>
            <option value="1421">Pachalum</option>
            <option value="1423">Santa Maria Nebaj</option>
            <option value="1424">Chicaman</option>
            <option value="1415">Uspantan</option>
            <option value="1406">Chichicastenango</option>
            `;
            break;
        case "11"://RETAHULEU
            municipioOrigen.removeAttribute("disabled");
            municipioOrigen.innerHTML = `
            <option value="0">Seleccione Municipio</option>
            <option value="1108">Nuevo San Carlos</option>
            <option value="1105">San Felipe</option>
            <option value="1109">El Asintal</option>
            <option value="1101">Retalhuleu</option>
            <option value="1106">San Andres Villa Seca</option>
            <option value="1104">San Martin Zapotitlan</option>
            <option value="1102">San Sebastian</option>
            <option value="1103">Santa Cruz Mulua</option>
            <option value="1107">Champerico</option>
            `;
            break;
        case "03"://SACATEPEQUEZ
            municipioOrigen.removeAttribute("disabled");
            municipioOrigen.innerHTML = `
            <option value="0">Seleccione Municipio</option>
            <option value="0305">Santo Domingo Xenacoj</option>
            <option value="0304">Sumpango</option>
            <option value="0314">San Juan Alotenango</option>
            <option value="0301">Antigua Guatemala</option>
            <option value="0312">Ciudad Vieja</option>
            <option value="0302">Jocotenango</option>
            <option value="0310">Magdalena Milpas Altas</option>
            <option value="0303">Pastores</option>
            <option value="0307">San Bartolome Milpas Altas</option>
            <option value="0308">San Lucas Sacatepequez</option>
            <option value="0309">Santa Lucia Milpas Altas</option>
            <option value="0306">Santiago Sacatepequez</option>
            <option value="0313">San Miguel Dueñas</option>
            <option value="0316">Santa Catarina Barahona</option>
            <option value="0315">San Antonio Aguas Calientes</option>
            <option value="0311">Santa Maria de Jesus</option>
            `;
            break;
        case "12"://SAN MARCOS
            municipioOrigen.removeAttribute("disabled");
            municipioOrigen.innerHTML = `
            <option value="0">Seleccione Municipio</option>
            <option value="1220">El Quetzal</option>
            <option value="1221">La Reforma</option>
            <option value="1214">El Rodeo</option>
            <option value="1215">Malacatan</option>
            <option value="1219">San Pablo</option>
            <option value="1211">San Rafael Pie de la Cuesta</option>
            <option value="1218">Ocos</option>
            <option value="1217">Tecun Uman</option>
            <option value="1213">El Tumbador</option>
            <option value="1216">Catarina</option>
            <option value="1222">Pajapita</option>
            <option value="1226">Sipacapa</option>
            <option value="1225">San Cristobal Cucho</option>
            <option value="1223">Ixchiguan</option>
            <option value="1224">San Jose Ojetenam</option>
            <option value="1210">Tejutla</option>
            <option value="1208">Sibinal</option>
            <option value="1207">Tacana</option>
            <option value="1209">Tajumulco</option>
            <option value="1204">Comitancillo</option>
            <option value="1206">Concepcion Tutuapa</option>
            <option value="1205">San Miguel Ixtahuacan</option>
            <option value="1228">Rio Blanco</option>
            <option value="1229">San Lorenzo</option>
            <option value="1201">San Marcos</option>
            <option value="1202">San Pedro Sacatepequez</option>
            <option value="1227">Esquipulas Palo Gordo</option>
            <option value="1203">San Antonio Sacatepequez</option>
            <option value="1217">Ayutla</option>
            <option value="1230">La Blanca</option>
            `;
            break; 
        case "06"://SANTA ROSA
            municipioOrigen.removeAttribute("disabled");
            municipioOrigen.innerHTML = `
            <option value="0">Seleccione Municipio</option>
            <option value="0608">Chiquimulilla</option>
            <option value="0609">Taxisco</option>
            <option value="0613">Pueblo Nuevo Viñas</option>
            <option value="0607">San Juan Tecuaco</option>
            <option value="0611">Guazacapan</option>
            <option value="0606">Oratorio</option>
            <option value="0602">Barberena</option>
            <option value="0610">Santa Maria Ixhuatan</option>
            <option value="0603">Santa Rosa de Lima</option>
            <option value="0612">Santa Cruz Naranjo</option>
            <option value="0604">Casillas</option>
            <option value="0614">Nueva Santa Rosa</option>
            <option value="0605">San Rafael Las Flores</option>
            <option value="0601">Cuilapa</option>
            `;
            break;
        case "07"://SOLOLA
            municipioOrigen.removeAttribute("disabled");
            municipioOrigen.innerHTML = `
            <option value="0">Seleccione Municipio</option>
            <option value="0706">Santa Catarina Ixtahuacan</option>
            <option value="0701">Solola</option>
            <option value="0710">Panajachel</option>
            <option value="0709">San Andres Semetabaj</option>
            <option value="0713">San Lucas Toliman</option>
            <option value="0719">Santiago Atitlan</option>
            <option value="0705">Nahuala</option>
            <option value="0702">San Jose Chacaya</option>
            <option value="0717">San Juan La Laguna</option>
            <option value="0716">San Marcos La Laguna</option>
            <option value="0715">San Pablo La Laguna</option>
            <option value="0718">San Pedro La Laguna</option>
            <option value="0707">Santa Clara La Laguna</option>
            <option value="0714">Santa Cruz La Laguna</option>
            <option value="0704">Santa Lucia Utatlan</option>
            <option value="0703">Santa Maria Visitacion</option>
            <option value="0711">Santa Catarina Palopo</option>
            <option value="0712">San Antonio Palopo</option>
            <option value="0708">Concepcion</option>
            `;
            break;
        case "10"://SUCHITEPEQUEZ
            municipioOrigen.removeAttribute("disabled");
            municipioOrigen.innerHTML = `
            <option value="0">Seleccione Municipio</option>
            <option value="1019">Pueblo Nuevo</option>
            <option value="1017">Santo Tomas La Union</option>
            <option value="1008">Samayac</option>
            <option value="1005">San Jose El Idolo</option>
            <option value="1009">San Pablo Jocopilas</option>
            <option value="1002">Cuyotenango</option>
            <option value="1003">San Francisco Zapotitlan</option>
            <option value="1012">San Gabriel</option>
            <option value="1007">San Lorenzo Suchitepequez</option>
            <option value="1018">Zunilito</option>
            <option value="1006">Santo Domingo</option>
            <option value="1001">Mazatenango</option>
            <option value="1013">Chicacao</option>
            <option value="1010">San Antonio Suchitepequez</option>
            <option value="1004">San Bernardino</option>
            <option value="1011">San Miguel Panan</option>
            <option value="1015">Santa Barbara</option>
            <option value="1016">San Juan Bautista</option>
            <option value="1014">Patulul</option>
            <option value="1020">Rio Bravo</option>
            <option value="1021">San Jose La Maquina</option>
            `;
            break; 
        case "08"://TOTONICAPAN
            municipioOrigen.removeAttribute("disabled");
            municipioOrigen.innerHTML = `
            <option value="0">Seleccione Municipio</option>
            <option value="0804">San Andres Xecul</option>
            <option value="0801">Totonicapan</option>
            <option value="0805">Momostenango</option>
            <option value="0803">San Francisco El Alto</option>
            <option value="0808">San Bartolo Aguas Calientes</option>
            <option value="0806">Santa Maria Chiquimula</option>
            <option value="0802">San Cristobal Totonicapan</option>
            <option value="0807">Santa Lucia la Reforma</option>
            `;
            break;
        case "19"://ZACAPA
            municipioOrigen.removeAttribute("disabled");
            municipioOrigen.innerHTML = `
            <option value="0">Seleccione Municipio</option>
            <option value="1908">San Diego</option>
            <option value="1903">Rio Hondo</option>
            <option value="1906">Usumatlan</option>
            <option value="1907">Cabañas</option>
            <option value="1910">Huite</option>
            <option value="1905">Teculutan</option>
            <option value="1904">Gualan</option>
            <option value="1909">La Union</option>
            <option value="1901">Zacapa</option>
            <option value="1911">San Jorge</option>
            <option value="1902">Estanzuela</option>
            `;
            break;                                      
        default:
            break;
    }
}