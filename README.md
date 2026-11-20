# Norteia — Gestão Jurídica

Primeira versão pública: landing page e painel demonstrativo interativo para a plataforma de gestão jurídica Norteia.

## Executar localmente

Abra `index.html` em um navegador ou sirva o diretório com qualquer servidor estático. O projeto não usa dependências externas nem coleta dados nesta etapa.

## Escopo desta versão

- Landing page responsiva e página de privacidade.
- Painel navegável com 18 áreas: visão geral, clientes, conflito e triagem, processos, prazos, agenda, tarefas, documentos, audiências, portal do cliente, comunicação, financeiro, equipe, relatórios, integrações, automações, auditoria e configurações.
- Busca, filtros de demonstração, navegação entre módulos e criação temporária de registro para mostrar o fluxo.
- Interface usa exclusivamente dados fictícios. Nenhum registro de demonstração é salvo no servidor.
- Cabeçalhos de segurança, metadados básicos de SEO, sitemap e otimização de cache de imagens.

## Limite operacional

Esta versão não é um sistema pronto para guardar casos reais. Antes do uso jurídico operacional, implementar autenticação, isolamento por escritório, controle de acesso no servidor, banco de dados, armazenamento privado de arquivos, trilha de auditoria resistente a alteração, gestão de sessões e rotinas de backup e recuperação. Prazos e automações de consequência jurídica exigem revisão por profissional responsável.

## Deploy

Netlify publica o diretório raiz como site estático. Os mesmos arquivos podem ser servidos em Cloudflare Workers Static Assets na etapa de infraestrutura. Não há credenciais nem dados de produção no repositório.
