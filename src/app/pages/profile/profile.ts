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

  // ================= PHONE COUNTRY =================

  readonly countryPhoneList: CountryPhoneCode[] = [
    {
      country: 'Egypt',
      code: '+20',
      flag: '🇪🇬',
      digitLength: 11,
      format: '01XXXXXXXXX'
    }
  ];


  // ================= PROFILE DATA =================

  fullName = signal(
    localStorage.getItem('profile_fullName') || ''
  );

  nationalId = signal(
    localStorage.getItem('profile_nationalId') || ''
  );

  email = signal(
    localStorage.getItem('profile_email') || ''
  );

  selectedCountry = signal<CountryPhoneCode>(
    this.countryPhoneList[0]
  );

  phoneNumber = signal(
    localStorage.getItem('profile_phone') || ''
  );


  // ================= STATUS =================

  saveSuccess = signal(false);

  errorMessage = signal('');


  // ================= COMPUTED =================

  dialCode = computed(
    () => this.selectedCountry().code
  );

  phonePlaceholder = computed(
    () => this.selectedCountry().format
  );

  requiredDigits = computed(
    () => this.selectedCountry().digitLength
  );


  // ================= COUNTRY SELECT =================

  onCountrySelect(countryName: string): void {

    const found = this.countryPhoneList.find(
      country => country.country === countryName
    );

    if (found) {
      this.selectedCountry.set(found);
    }
  }


  // ================= SAVE PROFILE =================

  saveProfile(): void {

    this.errorMessage.set('');
    this.saveSuccess.set(false);


    const nameVal = this.fullName().trim();

    const nationalIdVal = this.nationalId().trim();

    const emailVal = this.email().trim();

    const rawDigits = this.phoneNumber().replace(/\D/g, '');


    // ================= VALIDATION =================

    if (!nameVal) {
      this.errorMessage.set(
        'Please enter your full name.'
      );
      return;
    }


    if (!/^\d{14}$/.test(nationalIdVal)) {
      this.errorMessage.set(
        'National ID must contain exactly 14 digits.'
      );
      return;
    }

    if (
      !emailVal ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)
    ) {
      this.errorMessage.set(
        'Please enter a valid email address.'
      );
      return;
    }


    // Egyptian Phone
    if (rawDigits.length !== this.requiredDigits()) {
      this.errorMessage.set(
        `Invalid phone number length for ${this.selectedCountry().country}. Expected exactly ${this.requiredDigits()} digits.`
      );
      return;
    }


    // Egyptian mobile prefix
    if (!/^01[0125]/.test(rawDigits)) {
      this.errorMessage.set(
        'Please enter a valid Egyptian mobile number starting with 010, 011, 012, or 015.'
      );
      return;
    }


    // ================= SAVE =================

    localStorage.setItem(
      'profile_fullName',
      nameVal
    );

    localStorage.setItem(
      'profile_nationalId',
      nationalIdVal
    );

    localStorage.setItem(
      'profile_email',
      emailVal
    );

    localStorage.setItem(
      'profile_country',
      this.selectedCountry().country
    );

    localStorage.setItem(
      'profile_phone',
      rawDigits
    );


    this.saveSuccess.set(true);

    setTimeout(() => {
      this.saveSuccess.set(false);
    }, 3500);
  }
}