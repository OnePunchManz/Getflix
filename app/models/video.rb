class Video < ApplicationRecord
    validates :title, presence: true
    has_one_attached :movie
    has_one_attached :photo
end
