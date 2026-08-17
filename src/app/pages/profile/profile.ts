import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface CountryPhoneCode {
  country: string;
  code: string;
  flag: string;
  digitLength: number;
  format: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  readonly countryPhoneList: CountryPhoneCode[] = [
    { country: 'France', code: '+33', flag: '🇫🇷', digitLength: 9, format: '6 12 34 56 78' },
    { country: 'Germany', code: '+49', flag: '🇩🇪', digitLength: 10, format: '151 23456789' },
    { country: 'Italy', code: '+39', flag: '🇮🇹', digitLength: 10, format: '312 345 6789' },
    { country: 'Spain', code: '+34', flag: '🇪🇸', digitLength: 9, format: '612 34 56 78' },
    { country: 'Netherlands', code: '+31', flag: '🇳🇱', digitLength: 9, format: '6 12345678' },
    { country: 'Egypt', code: '+20', flag: '🇪🇬', digitLength: 10, format: '10 1234 5678' },
    { country: 'United Kingdom', code: '+44', flag: '🇬🇧', digitLength: 10, format: '7123 456789' }
  ];

  fullName = signal(localStorage.getItem('profile_fullName') || '');
  email = signal(localStorage.getItem('profile_email') || '');
  selectedCountry = signal<CountryPhoneCode>(this.countryPhoneList[0]);
  phoneNumber = signal(localStorage.getItem('profile_phone') || '');
  
  saveSuccess = signal(false);
  errorMessage = signal('');

  dialCode = computed(() => this.selectedCountry().code);
  phonePlaceholder = computed(() => this.selectedCountry().format);
  requiredDigits = computed(() => this.selectedCountry().digitLength);

  onCountrySelect(countryName: string): void {
    const found = this.countryPhoneList.find(c => c.country === countryName);
    if (found) this.selectedCountry.set(found);
  }

  saveProfile(): void {
    this.errorMessage.set('');
    this.saveSuccess.set(false);

    const nameVal = this.fullName().trim();
    const emailVal = this.email().trim();
    const rawDigits = this.phoneNumber().replace(/\D/g, ''); // Extract numbers only

    // Validation 1: Required text fields
    if (!nameVal) {
      this.errorMessage.set('Please enter your full name.');
      return;
    }

    if (!emailVal || !emailVal.includes('@')) {
      this.errorMessage.set('Please enter a valid email address.');
      return;
    }

    // Validation 2: Exact phone digit count constraint per country
    if (rawDigits.length !== this.requiredDigits()) {
      this.errorMessage.set(
        `Invalid phone number length for ${this.selectedCountry().country}. Expected exactly ${this.requiredDigits()} digits.`
      );
      return;
    }

    // Save strictly valid data
    localStorage.setItem('profile_fullName', nameVal);
    localStorage.setItem('profile_email', emailVal);
    localStorage.setItem('profile_country', this.selectedCountry().country);
    localStorage.setItem('profile_phone', rawDigits);

    this.saveSuccess.set(true);
    setTimeout(() => this.saveSuccess.set(false), 3500);
  }
}