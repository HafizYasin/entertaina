require 'test_helper'

class SearchPagesControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get found" do
    get :found
    assert_response :success
  end

end
