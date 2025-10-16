# Slider Programmi Gratuiti - LearnWorlds

Slider interattivo con effetto focus per i programmi gratuiti di Leone Master School.

## Caratteristiche

- **Desktop**: 6 card visibili con quella centrale in focus
- **Mobile**: 1 card centrale in focus con parti laterali opacizzate
- **Navigazione**: Frecce, click sulle card, swipe mobile, tastiera
- **CTA dinamica**: Il link cambia in base alla card selezionata
- **Responsive**: Ottimizzato per tutti i dispositivi

## Struttura File

```
slider-programmi-gratuiti/
├── index.html          # Struttura HTML
├── style.css           # Stili e responsive
├── script.js           # Logica slider
├── images/             # Cartella immagini
│   ├── 1.png          # AI Genius Lab
│   ├── 2.png          # Benessere Spirituale
│   ├── 3.png          # Da Dipendente a Imprenditore
│   ├── 4.png          # Flusso di Lavoro
│   ├── 5.png          # Motiv-Azione
│   ├── 6.png          # Meditazioni Pro
│   ├── 7.png          # Marketing Locale
│   ├── 8.png          # Fare Soldi con le Case
│   ├── 9.png          # Finanza Etica
│   ├── 10.png         # La Scienza delle Emozioni
│   └── 11.png         # Cum Vinco
└── embed.html          # File per embedding LearnWorlds
```

## Come Embeddare su LearnWorlds

### Metodo 1: Custom Element (Consigliato)

1. Carica tutti i file su un hosting (es: Cloudflare, AWS S3, o hosting LearnWorlds)
2. Copia il contenuto di `embed.html`
3. In LearnWorlds, vai alla pagina dove vuoi inserire lo slider
4. Aggiungi un blocco **Custom Element** o **HTML**
5. Incolla il codice
6. Aggiorna i percorsi delle immagini con gli URL completi

### Metodo 2: Inline (Tutto in un file)

Usa il file `embed.html` che contiene tutto il codice inline.

## Link Associati

1. AI Genius Lab → https://app.leonemasterschool.it/course/ai-genius-lab
2. Benessere Spirituale → https://app.leonemasterschool.it/course/benessere-spirituale-costruisci-una-vita-equilibrata-grazie-al-potere-dellinvisibile
3. Da Dipendente a Imprenditore → https://app.leonemasterschool.it/course/da-dipendente-a-imprenditore
4. Flusso di Lavoro → https://app.leonemasterschool.it/course/flusso-di-lavoro-come-organizzare-meglio-il-tuo-lavoro-per-massimizzare
5. Motiv-Azione → https://app.leonemasterschool.it/course/motiv-azione-le-armi-segrete-per-aumentare-la-tua-autostima
6. Meditazioni Pro → https://app.leonemasterschool.it/course/meditazioni-pro-risolvi-i-tuoi-problemi-grazie-al-potere-della-meditazione
7. Marketing Locale → https://app.leonemasterschool.it/course/marketing-locale-strategie-per-promuovere-e-vendere-sul-territorio
8. Fare Soldi con le Case → https://app.leonemasterschool.it/course/fare-soldi-con-le-case
9. Finanza Etica → https://app.leonemasterschool.it/course/finanza-etica-e-sostenibile
10. La Scienza delle Emozioni → https://app.leonemasterschool.it/course/la-scienza-delle-emozioni-benessere-psicologico-e-relazioni-interpersonali
11. Cum Vinco → https://app.leonemasterschool.it/course/cum-vinco-vinci-e-fai-vincere

## Personalizzazione

### Cambiare i colori del CTA
Nel file `style.css`, modifica:
```css
.cta-btn {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Abilitare l'autoplay
Nel file `script.js`, decommenta la sezione finale:
```javascript
// Auto-play (optional - uncomment to enable)
```

### Modificare il numero di card visibili
Nel file `script.js`, funzione `getVisibleSlides()`:
```javascript
return 6; // Cambia questo numero per desktop
```

## Note Tecniche

- Compatibile con tutti i browser moderni
- Nessuna dipendenza esterna (no jQuery, no librerie)
- Ottimizzato per performance
- Touch-friendly per mobile
- Accessibile via tastiera (frecce)

## Supporto

Per problemi o modifiche, contattare il team di sviluppo.
