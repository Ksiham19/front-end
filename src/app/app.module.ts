import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// Supprimez les déclarations des composants autonomes

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    // Ici, importez vos composants autonomes
  ],
  providers: [],
  bootstrap: [/* Ici, vous pouvez définir le composant racine ou laisser vide pour un composant autonome */]
})
export class AppModule {}
