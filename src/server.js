const mjml = require('mjml');
const fs = require('fs');
const path = require('path');

// Caminho do template MJML
const templatePath = path.join(__dirname, 'templates', 'template.mjml');

// Função para compilar o MJML em HTML
const buildHtml = () => {
  fs.readFile(templatePath, 'utf8', (err, mjmlContent) => {
    if (err) {
      console.error('Erro ao ler o template:', err);
      return;
    }

    // Substituindo as variáveis dinamicamente (exemplo)
    const companyName = 'Empresa X';  // Nome da empresa
    const companyLogo = path.join(__dirname, 'assets', 'logo.png');  // Logo da empresa
    
    // Substituindo variáveis no template
    let htmlContent = mjmlContent.replace('{{companyName}}', companyName)
                                  .replace('{{companyLogo}}', companyLogo);

    // Compilando o MJML em HTML
    const { html, errors } = mjml(htmlContent);

    if (errors.length) {
      console.error('Erro ao compilar o MJML:', errors);
      return;
    }

    // Caminho do arquivo de saída
    const outputPath = path.join(__dirname, 'output', 'template.html');

    // Salvando o HTML gerado
    fs.writeFileSync(outputPath, html, 'utf8');
    
    console.log('HTML gerado com sucesso!');
  });
};

// Chama a função para gerar o HTML inicialmente
buildHtml();

// Exporta para o nodemon poder usar
module.exports = buildHtml;
