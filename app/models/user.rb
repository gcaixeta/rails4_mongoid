class User
  include Mongoid::Document

  has_many :posts
  has_many :comments

  field :name
end
