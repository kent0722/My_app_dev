class Post < ApplicationRecord
  belongs_to :user

  validates :brand, presence: true, length: { maximum: 20 }
  validates :category, presence: true, length: { maximum: 20 }
  validates :production_year, numericality: { only_integer: true }, allow_blank: true
  validates :instrument_model, length: { maximum: 25 }
  validates :body, length: { maximum: 100 }

  enum brand: { Fender: 0, Gibson: 1, Ibanez: 2, Yamaha: 3, Martin: 4 }
  enum category: { Stratocaster: 0, Telecaster: 1, Lesporl: 2 }
  enum production_year: (1950..2024).map { |year| [year.to_s, year] }.to_h
end
