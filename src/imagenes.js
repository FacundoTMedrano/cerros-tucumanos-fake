const imgGaleria = [
    "https://ik.imagekit.io/showimg/cerros-tucumanos/foto_1_EEWFSMCwV.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666894144270",
    "https://ik.imagekit.io/showimg/cerros-tucumanos/foto_2_yUUVkp8pI.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666894144075",
    "https://ik.imagekit.io/showimg/cerros-tucumanos/foto_4_qpc1UUAJq.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666894142648",
    "https://ik.imagekit.io/showimg/cerros-tucumanos/foto_3_XdhSi288wf.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666894142631",
    "https://ik.imagekit.io/showimg/cerros-tucumanos/foto_5_aOSb6J9J8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666894142616",
    "https://ik.imagekit.io/showimg/cerros-tucumanos/foto_7_tsYpJuiq3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666894143468",
    "https://ik.imagekit.io/showimg/cerros-tucumanos/foto_6_OhCzLSbMN.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666894141607",
    "https://ik.imagekit.io/showimg/cerros-tucumanos/foto_8_8Dp8JZh7j4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666894144071",
    "https://ik.imagekit.io/showimg/cerros-tucumanos/foto_9_qCQCLiYbj.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666894144073",
    "https://ik.imagekit.io/showimg/cerros-tucumanos/foto_10_2JQ7ae6mw.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666894142933",
    "https://ik.imagekit.io/showimg/cerros-tucumanos/foto_11_qvgZ_Ce7v.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666894144457"
];
const imgInicio = [
    "https://ik.imagekit.io/showimg/cerros-tucumanos/mozzarella3__copia_1__yysXYILeq.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666901708042",
    "https://ik.imagekit.io/showimg/cerros-tucumanos/yogurt2_dh6x3LvYq.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666901708479",
    "https://ik.imagekit.io/showimg/cerros-tucumanos/foto_expo__copia_1___dow-N-GM.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666901708598"
]

const datosGaleria = imgGaleria.map((x, i) => ({ id: i, path: x }))
const logoCerrosTucumanos = "https://ik.imagekit.io/showimg/cerros-tucumanos/logo_1AcBD0cyf.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666896095885"

const imagenes = {
    datosGaleria,
    logoCerrosTucumanos,
    imgInicio
}

export default imagenes;