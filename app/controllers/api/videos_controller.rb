class Api::VideosController < ApplicationController
   def show
        @video = Video.find(params[:id])
   end

   def index
    @videos = Video.all
   end
end