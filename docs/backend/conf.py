# Configuration file for the Sphinx documentation builder.

# -- Project information -----------------------------------------------------

project = 'Smart Inbox AI'
copyright = '2025, José Vitor Oliveira'
author = 'José Vitor Oliveira'
release = '1.1.0'

# -- Path setup --------------------------------------------------------------

import os
import sys

# Adiciona o caminho do diretório pai para importar os módulos
sys.path.insert(0, os.path.abspath('..'))  # Ajuste conforme sua estrutura real

# -- General configuration ---------------------------------------------------

extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.napoleon',
    'sphinx_autodoc_typehints',
    'sphinxcontrib.openapi',
]

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']

# -- Options for HTML output -------------------------------------------------

html_theme = 'sphinx_rtd_theme'  # Tema moderno (ReadTheDocs)
html_static_path = ['_static']
