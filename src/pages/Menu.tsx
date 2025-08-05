import React, { useState } from 'react';
import { Upload, X, Edit, Save, Plus, Lock } from 'lucide-react';
import { useAuth } from '../App';
import { Link } from 'react-router-dom';

interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  description?: string;
}

const Menu = () => {
  const { isAuthenticated } = useAuth();
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    // Mini Pancakes
    { id: '1', name: 'Maple Butter', price: 60, category: 'Mini Pancakes', description: 'Classic mini pancakes with rich maple butter' },
    { id: '2', name: 'Dark Chocolate Heaven', price: 70, category: 'Mini Pancakes', description: 'Decadent dark chocolate mini pancakes' },
    { id: '3', name: 'White Chocolate Heaven', price: 70, category: 'Mini Pancakes', description: 'Creamy white chocolate delight' },
    { id: '4', name: 'Strawberry', price: 80, category: 'Mini Pancakes', description: 'Fresh strawberry mini pancakes' },
    { id: '5', name: 'Blueberry', price: 80, category: 'Mini Pancakes', description: 'Bursting with fresh blueberries' },
    { id: '6', name: 'Oreo Fillings', price: 80, category: 'Mini Pancakes', description: 'Crunchy Oreo cookie pieces' },
    { id: '7', name: 'Butter Scotch', price: 90, category: 'Mini Pancakes', description: 'Rich butterscotch flavor' },
    { id: '8', name: 'Mango Delight', price: 80, category: 'Mini Pancakes', description: 'Tropical mango goodness' },
    
    // Signature Pancakes
    { id: '9', name: 'Cotton Candy', price: 70, category: 'Signature Pancakes', description: 'Fluffy cotton candy pancakes' },
    { id: '10', name: 'KitKat Loaded', price: 100, category: 'Signature Pancakes', description: 'Loaded with KitKat pieces' },
    { id: '11', name: 'Nutella Delight', price: 90, category: 'Signature Pancakes', description: 'Rich Nutella spread' },
    { id: '12', name: 'Double Chocolate Blast', price: 80, category: 'Signature Pancakes', description: 'Double dose of chocolate' },
    { id: '13', name: 'Triple Bytes', price: 100, category: 'Signature Pancakes', description: 'Three layers of goodness' },
    { id: '14', name: 'Red Velvet Cheesecake', price: 100, category: 'Signature Pancakes', description: 'Classic red velvet with cheesecake' },
    { id: '15', name: 'Lotus Biscoff', price: 120, category: 'Signature Pancakes', description: 'Premium Lotus Biscoff flavor' },
    { id: '16', name: 'Malai Kulfi', price: 120, category: 'Signature Pancakes', description: 'Premium Malai Kulfi flavor' },
    { id: '17', name: 'Cheesy Touch', price: 120, category: 'Signature Pancakes', description: 'Premium Cheesy Touch flavor' },
    { id: '18', name: 'JDs Chocolate', price: 120, category: 'Signature Pancakes', description: 'Premium Lotus Biscoff flavor' },
    
    // Brocolates
    { id: '19', name: 'Dark Chocolate', price: 90, category: 'Brocolates', description: 'Rich dark chocolate brocolate' },
    { id: '20', name: 'White Chocolate', price: 100, category: 'Brocolates', description: 'Smooth white chocolate' },
    { id: '21', name: 'Milk Chocolate', price: 100, category: 'Brocolates', description: 'Creamy milk chocolate' },
    { id: '22', name: 'Oreo Loaded', price: 100, category: 'Brocolates', description: 'Oreo cookie loaded' },
    { id: '23', name: 'Nutella', price: 110, category: 'Brocolates', description: 'Nutella spread goodness' },
    { id: '24', name: 'Death by Chocolate', price: 120, category: 'Brocolates', description: 'Ultimate chocolate experience' },
    { id: '25', name: 'Lotus Biscoff', price: 120, category: 'Brocolates', description: 'Premium Lotus Biscoff' },
    { id: '26', name: 'Butter Scotch', price: 120, category: 'Brocolates', description: 'Premium Butter Scotch' },
  ]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isAuthenticated) return;
    
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    if (!isAuthenticated) return;
    setUploadedImage(null);
  };

  const categories = [...new Set(menuItems.map(item => item.category))];

  const updateMenuItem = (id: string, updates: Partial<MenuItem>) => {
    if (!isAuthenticated) return;
    setMenuItems(items => items.map(item => 
      item.id === id ? { ...item, ...updates } : item
    ));
  };

  const addNewItem = (category: string) => {
    if (!isAuthenticated) return;
    const newItem: MenuItem = {
      id: Date.now().toString(),
      name: 'New Item',
      price: 0,
      category,
      description: 'New delicious item'
    };
    setMenuItems([...menuItems, newItem]);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-pink to-primary-blue bg-clip-text text-transparent">
              Our Delicious Menu
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-6">Explore our signature pancakes and treats</p>
          
          {/* Edit Toggle - Only show if authenticated */}
          {isAuthenticated ? (
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`flex items-center space-x-2 mx-auto px-6 py-3 rounded-full font-semibold transition-colors duration-200 ${
                isEditing 
                  ? 'bg-green-500 hover:bg-green-600 text-white' 
                  : 'bg-primary-blue hover:bg-blue-600 text-white'
              }`}
            >
              {isEditing ? <Save size={20} /> : <Edit size={20} />}
              <span>{isEditing ? 'Save Changes' : 'Edit Menu'}</span>
            </button>
          ) : (
            <div className="flex items-center justify-center space-x-2 text-gray-500">
              <Lock size={20} />
              <span>Admin login required to edit menu</span>
              <Link to="/login" className="text-primary-blue hover:text-primary-pink font-semibold">
                Login here
              </Link>
            </div>
          )}
        </div>

        {/* Image Upload Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg mb-8">
          <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">Menu Image</h2>
          
          {!uploadedImage ? (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary-pink transition-colors duration-200">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">
                {isAuthenticated ? 'Upload your menu image here' : 'Image upload requires admin login'}
              </p>
              {isAuthenticated ? (
                <label className="inline-flex items-center space-x-2 bg-primary-pink hover:bg-pink-600 text-white px-6 py-3 rounded-lg cursor-pointer transition-colors duration-200">
                  <Upload size={20} />
                  <span>Choose Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              ) : (
                <Link 
                  to="/login"
                  className="inline-flex items-center space-x-2 bg-gray-400 text-white px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  <Lock size={20} />
                  <span>Login to Upload</span>
                </Link>
              )}
            </div>
          ) : (
            <div className="relative">
              <img 
                src={uploadedImage} 
                alt="Menu" 
                className="w-full max-w-4xl mx-auto rounded-lg shadow-md" 
              />
              {isAuthenticated && (
                <button
                  onClick={removeImage}
                  className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors duration-200"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          )}
        </div>

        {/* Menu Items */}
        <div className="space-y-12">
          {categories.map(category => (
            <div key={category} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-display font-bold text-gray-800">
                  <span className={`${
                    category === 'Mini Pancakes' ? 'text-primary-pink' :
                    category === 'Signature Pancakes' ? 'text-primary-blue' :
                    'text-purple-600'
                  }`}>
                    {category}
                  </span>
                </h2>
                {isAuthenticated && isEditing && (
                  <button
                    onClick={() => addNewItem(category)}
                    className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    <Plus size={18} />
                    <span>Add Item</span>
                  </button>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems
                  .filter(item => item.category === category)
                  .map(item => (
                    <div key={item.id} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
                      <div className="flex justify-between items-start mb-2">
                        {isAuthenticated && isEditing ? (
                          <input
                            type="text"
                            value={item.name}
                            onChange={(e) => updateMenuItem(item.id, { name: e.target.value })}
                            className="font-semibold text-gray-800 border-b-2 border-gray-200 focus:border-primary-pink outline-none bg-transparent"
                          />
                        ) : (
                          <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        )}
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">₹</span>
                          {isAuthenticated && isEditing ? (
                            <input
                              type="number"
                              value={item.price}
                              onChange={(e) => updateMenuItem(item.id, { price: parseInt(e.target.value) })}
                              className="font-bold text-primary-blue w-16 border-b-2 border-gray-200 focus:border-primary-blue outline-none bg-transparent"
                            />
                          ) : (
                            <span className="font-bold text-primary-blue">{item.price}</span>
                          )}
                        </div>
                      </div>
                      {isAuthenticated && isEditing ? (
                        <textarea
                          value={item.description || ''}
                          onChange={(e) => updateMenuItem(item.id, { description: e.target.value })}
                          className="text-sm text-gray-600 w-full border border-gray-200 rounded p-2 focus:border-primary-pink outline-none resize-none"
                          rows={2}
                        />
                      ) : (
                        <p className="text-sm text-gray-600">{item.description}</p>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 p-6 bg-gradient-to-r from-primary-pink to-primary-blue rounded-2xl text-white">
          <p className="text-lg font-display">
            All prices are subject to change. For the latest menu and pricing, please visit us or call Vijay at 9944680618
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;