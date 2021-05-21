/* eslint-disable @typescript-eslint/restrict-plus-operands */
import PDFKit from 'pdfkit'
import fs from 'fs'
import path from 'path'

async function generatePDF (idName: string, dados: IData): Promise<any> {
  const pdf = new PDFKit()
  await pdf.pipe(fs.createWriteStream(path.resolve('.', 'public', 'uploads', 'pdf', idName + '.pdf')))
  pdf
    .fontSize(35)
    .text('Técnica de Programação', 100, 50)
  pdf
    .fontSize(25)
    .text('Aplicação desktop de uma pesquisa de endereço por cep e informações de um local.', 10, 100, {
      width: 550,
      align: 'center'
    })
  pdf.image(path.resolve('.', 'public', 'uploads', 'image', idName + '.jpg'), 5, 50, {
    fit: [600, 600],
    align: 'center',
    valign: 'center'
  })
  pdf.moveDown()
  pdf.fontSize(25).text('Imagem extraída do programa', 150, 525)
  pdf.fontSize(25).text(`CEP: ${dados.cep} \nCidade: ${dados.localidade} - ${dados.uf}`, 30, 550, {
    width: 550,
    align: 'center'
  })
  pdf.end()

  return 'uploads/pdf/' + idName + '.pdf'
}

export default generatePDF

interface IData{
  longitude: string
  latitude: string
  localidade: string
  uf: string
  cep: string
}
