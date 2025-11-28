import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const services = [
    {
      icon: 'ClipboardCheck',
      title: 'Техническое обследование',
      description: 'Комплексный анализ состояния здания перед вводом в эксплуатацию'
    },
    {
      icon: 'FileCheck2',
      title: 'Испытания и измерения',
      description: 'Лабораторные исследования строительных материалов и конструкций'
    },
    {
      icon: 'Award',
      title: 'Сертификация',
      description: 'Получение всех необходимых документов для ввода объекта'
    },
    {
      icon: 'Shield',
      title: 'Экспертиза безопасности',
      description: 'Проверка соответствия нормам пожарной и конструктивной безопасности'
    },
    {
      icon: 'Zap',
      title: 'Электротехнические испытания',
      description: 'Проверка электрических сетей и заземления объекта'
    },
    {
      icon: 'Droplet',
      title: 'Гидравлические испытания',
      description: 'Проверка систем водоснабжения и канализации'
    }
  ];

  const stats = [
    { number: '500+', label: 'Объектов введено', icon: 'Building2' },
    { number: '15 лет', label: 'Опыта работы', icon: 'Calendar' },
    { number: '100%', label: 'Точность результатов', icon: 'Target' },
    { number: '24/7', label: 'Поддержка клиентов', icon: 'Clock' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="FlaskConical" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-primary">ТестЛаб</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button>Оставить заявку</Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Ввод в эксплуатацию жилых домов
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Аккредитованная испытательная лаборатория с полным спектром услуг для быстрого и законного ввода объектов недвижимости
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать звонок
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Узнать подробнее
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/3fa20559-9b8e-42c2-8c88-535ca2d8f540/files/1a1df9cc-048d-43bb-bc75-206ea83e6a29.jpg" 
                alt="Лаборатория" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center animate-slide-up border-none shadow-lg" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <Icon name={stat.icon as any} size={40} className="mx-auto mb-4 text-primary" />
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный комплекс испытаний и экспертиз для ввода жилых домов в эксплуатацию
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://cdn.poehali.dev/projects/3fa20559-9b8e-42c2-8c88-535ca2d8f540/files/a1a0567d-9772-4ea0-8421-1140c9058a97.jpg" 
                alt="Процесс работы" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">О лаборатории</h2>
              <p className="text-lg text-muted-foreground mb-6">
                ТестЛаб — аккредитованная испытательная лаборатория с 15-летним опытом работы в сфере ввода объектов недвижимости в эксплуатацию.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Мы используем современное высокоточное оборудование и работаем в соответствии с актуальными нормативными документами РФ.
              </p>

              <div className="space-y-4">
                {[
                  { icon: 'CheckCircle2', text: 'Аккредитация Росаккредитации' },
                  { icon: 'CheckCircle2', text: 'Квалифицированные специалисты' },
                  { icon: 'CheckCircle2', text: 'Современное оборудование' },
                  { icon: 'CheckCircle2', text: 'Короткие сроки выполнения работ' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Icon name={item.icon as any} size={24} className="text-primary flex-shrink-0" />
                    <span className="text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Оставить заявку</h2>
            <p className="text-xl text-muted-foreground">
              Заполните форму и мы свяжемся с вами в ближайшее время
            </p>
          </div>

          <Card className="shadow-xl border-2">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input 
                    placeholder="Ваше имя" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input 
                    placeholder="+7 (___) ___-__-__" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем объекте" 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="FlaskConical" size={32} />
                <h3 className="text-2xl font-bold">ТестЛаб</h3>
              </div>
              <p className="text-white/70">
                Аккредитованная испытательная лаборатория
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/70">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@testlab.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>г. Москва, ул. Примерная, д. 1</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Режим работы</h4>
              <p className="text-white/70">
                Пн-Пт: 9:00 - 18:00<br />
                Сб-Вс: Выходной
              </p>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>© 2024 ТестЛаб. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
