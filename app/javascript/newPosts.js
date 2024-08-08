document.addEventListener('DOMContentLoaded', () => {
  const renderComponents = () => {
    const brandInput = document.getElementById('brand');
    const nodeList = document.querySelectorAll('#brand-list option')
    const datalistOptions = Array.from(nodeList).map(option => option.value);
    const categoryInput = document.getElementById('category');
    const instrumentModelInput = document.getElementById('instrument_model')
    const fileInput = document.getElementById('file-input');
    const placeholderText = document.getElementById('placeholder-text');
    const imagePreview = document.getElementById('image-preview');

    //brand 入力制限
    if(brandInput){
      brandInput.addEventListener('input', () => {
        const brandValue = brandInput.value;
        if (!datalistOptions.includes(brandValue)) {
          brandInput.value = '';
        }
      });
    }
    //category 入力補助
    if (categoryInput) {
      categoryInput.addEventListener('focus', () => { 
        categoryInput.setAttribute('placeholder', "例: Telecaster, Les paul, AZ(Ibanez)");
      });
      categoryInput.addEventListener('blur', () => {
        categoryInput.setAttribute('placeholder', ' ');
      });
    }
    //instrument_model 入力補助
    if (instrumentModelInput) {
    instrumentModelInput.addEventListener('focus', () => {
        instrumentModelInput.setAttribute('placeholder', '例: Vintage Model')
      })
      instrumentModelInput.addEventListener('blur', () => {
        instrumentModelInput.setAttribute('placeholder', '')
      })
    }
    //imageアップロード
    if(fileInput){
      fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = (e) => {
            imagePreview.src = e.target.result;
            imagePreview.classList.remove('hidden');
            placeholderText.classList.add('hidden');
          }
        } else {
          imagePreview.classList.add('hidden');
          placeholderText.classList.remove('hidden');
        }
      });
    } 
  }
  document.addEventListener('turbo:load', renderComponents);
});

