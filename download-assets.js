const fs = require('fs');
const https = require('https');

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307) {
        return download(res.headers.location.startsWith('http') ? res.headers.location : new URL(res.headers.location, url).href, dest).then(resolve, reject);
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', (err) => { 
      fs.unlink(dest, () => {}); // ignoring unlink error
      reject(err); 
    });
  });
};

const dirs = ['./public/js', './public/images'];
dirs.forEach(d => { if(!fs.existsSync(d)) fs.mkdirSync(d, {recursive: true}); });

const files = [
  ['https://unpkg.com/alpinejs@3.14.3/dist/cdn.min.js', './public/js/alpine.min.js'],
  ['https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js', './public/js/gsap.min.js'],
  ['https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js', './public/js/ScrollTrigger.min.js'],
  ['https://unpkg.com/split-type@0.3.4/umd/index.min.js', './public/js/split-type.min.js'],
  ['https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?fm=jpg&q=80&w=1200', './public/images/autohaus-hero.jpg'],
  ['https://images.unsplash.com/photo-1552519507-da3b142c6e3d?fm=jpg&q=80&w=600', './public/images/autohaus-step1.jpg'],
  ['https://images.unsplash.com/photo-1620011403063-e54db5b0d0c3?fm=jpg&q=80&w=600', './public/images/autohaus-step2.jpg'],
  ['https://images.unsplash.com/photo-1560958089-b8a1929cea89?fm=jpg&q=80&w=600', './public/images/autohaus-step3.jpg']
];

Promise.all(files.map(f => download(f[0], f[1])))
  .then(() => console.log('All downloads completed successfully.'))
  .catch(err => {
      console.error('Error downloading files:', err);
      process.exit(1);
  });
