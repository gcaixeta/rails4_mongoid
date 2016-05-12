class Comment
  include Mongoid::Document
  include Mongoid::Timestamps

  belongs_to :post
  belongs_to :user

  field :body, type: String
end
