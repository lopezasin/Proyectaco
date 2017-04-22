Phaser.SoundManager.prototype._play = Phaser.SoundManager.prototype.play;
Phaser.SoundManager.prototype.play = function (key, volume, loop) {

    if(this.game.device.cordova){
        window.plugins.NativeAudio.play(key);
    }else{
        return this._play(key, volume, loop);
    }

}

Phaser.Loader.prototype._loadAudioTag = Phaser.Loader.prototype.loadAudioTag;
Phaser.Loader.prototype.loadAudioTag = function (file) {

    if(this.game.device.cordova){

        var _this = this;

        window.plugins.NativeAudio.preloadSimple( file.key, this.transformUrl(file.url, file), function(){
            _this.fileComplete(file);
        }, function(){
            _this.fileError(file);
        });

    }else{

        this._loadAudioTag(file);
        
    }

}