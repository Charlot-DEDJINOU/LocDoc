import React from 'react';
import { 
  Star, 
  Quote
} from 'lucide-react';
import Button from '../../commons/Button';

interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

const Reviews: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">AVIS</h2>
          <p className="text-sm text-gray-500">255 au total</p>
        </div>
        <Button variant="secondary" className="text-sm">
          Voir tout
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-gray-50 rounded-lg p-4 relative">
            <Quote className="w-6 h-6 text-blue-400 mb-2" />
            <p className="text-sm text-gray-700 mb-4">{review.comment}</p>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-blue-600 text-sm">{review.userName}</p>
                <p className="text-xs text-gray-500">{review.date}</p>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full">
                {renderStars(review.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;