const message = `Mirza selamat tahun baru yaa! Semoga di tahun ini mirzaa banyak bahagianya. Naaa tuh sukaa banget merasa jengkel dan gemes ke mirza. Naa minta maaf yaa kalau memang na buat mirza benar-benar sakit hati. Na selama ini selalu denial sama hubungan kita, karna na takut. Ada hal yang ga bisa na jelasin. Tapi selama ini na selalu curhat tentang mirza ke temen-temen na even ke faqih, na selalu cerita kalau tindakan mirza kadang buat na sedih, tapi na ga pernah bisa terus terang ke mirza. Na cuma mau bilang biar mirza tuuh tau kalau na sampai sekarang masih sayang sama mirza. Kamuu tuu berharga dan kamu salah satu momen yang ga akan pernah na lupa, i hope in another life kita ga akan saling jatuh cinta yaa biar kita ga sama-sama tersakiti dan kamu menemukan perempuan yang sayaaaannnggg bangeettt sama kamu daripada aku, jangan sedih-sedih yaa, mirzaa...`;

function showLetter() {
  // 1. Memulai musik latar
  const audio = document.getElementById("myAudio");
  if (audio) {
    audio.play().catch(error => console.log("Audio play blocked"));
  }

  // 2. Animasi menghilangkan intro dan tombol
  const intro = document.getElementById("introText");
  const btn = document.querySelector(".btn");
  
  intro.style.opacity = 0;
  btn.style.opacity = 0;

  setTimeout(() => {
    intro.style.display = "none";
    btn.style.display = "none";

    // 3. Menampilkan kotak surat
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    
    // Memberi sedikit jeda agar transisi opacity halus
    setTimeout(() => {
      letterBox.style.opacity = 1;
      startTyping();
    }, 100);
  }, 1000); 
}

function startTyping() {
  const typedText = document.getElementById("typedText");
  const letterBox = document.getElementById("letterBox");
  const sig = document.getElementById("signatureImg");
  let i = 0;

  function typeWriter() {
    if (i < message.length) {
      typedText.innerHTML += message.charAt(i);
      i++;
      
      // AUTO-SCROLL: Agar layar otomatis turun ke bawah saat mengetik (Penting untuk HP)
      letterBox.scrollTop = letterBox.scrollHeight;
      
      setTimeout(typeWriter, 50); // Kecepatan ngetik disesuaikan agar nyaman dibaca
    } else {
      // Tampilkan tanda tangan setelah selesai ngetik
      if (sig) {
        sig.style.display = "block";
        setTimeout(() => {
          sig.style.opacity = 1;
          // Scroll terakhir untuk memastikan tanda tangan terlihat
          letterBox.scrollTop = letterBox.scrollHeight;
        }, 100);
      }
    }
  }

  typeWriter();
}