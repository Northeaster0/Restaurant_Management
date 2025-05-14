import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="absolute top-6 right-8">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 font-semibold"
        >
          Çıkış Yap
        </button>
      </div>
      <h1 className="text-5xl font-bold text-gray-800 mb-8">
        Restoran Yönetim Sistemi
      </h1>
      <div className="flex gap-4">
        <button
          onClick={() => navigate('/menu')}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200"
        >
          Menüye Git
        </button>
        <button
          onClick={() => navigate('/kitchen')}
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors duration-200"
        >
          Mutfak Paneli
        </button>
        <button
          onClick={() => navigate('/update_menu_items')}
          className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-200"
        >
          Menüyü Güncelle
        </button>
        <button
          onClick={() => navigate('/tables')}
          className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-200"
        >
          Masalar
        </button>
        <button
          onClick={() => {
            const pwd = prompt('Admin şifresini girin:');
            if (pwd === '123') {
              navigate('/staff');
            } else if (pwd !== null) {
              alert('Hatalı şifre!');
            }
          }}
          className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 transition-colors duration-200"
        >
          Çalışanlar
        </button>
        <button
          onClick={() => navigate('/reports')}
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-200"
        >
          Raporlar
        </button>
      </div>
    </div>
  );
}

export default Home; 